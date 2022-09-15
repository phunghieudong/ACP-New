import { eventManager } from "../libs/rxjs/index";
import * as SecureStore from "expo-secure-store";
import axios, { AxiosResponse } from "axios";
import { settings } from "../configs";

const apiConfig = {
  baseUrl: `${settings.hostURL}/api`,
};

export const getSecureToken = async () => {
  try {
    const retrievedItem = await SecureStore.getItemAsync("token");
    if (retrievedItem !== null) {
      return retrievedItem;
    }
    return null;
  } catch (err) {
    return null;
  }
};

const getUrl = (config) => {
  if (config.baseURL) {
    return config.url.replace(config.baseURL, "");
  }
  return config.url;
};

const instance = axios.create({
  baseURL: apiConfig.baseUrl,
  headers: {
    Accept: "application/json",
  },
  timeout: 10000,
});

// Intercept all request
instance.interceptors.request.use(
  async (config: any) => {
    const token = await getSecureToken();
    if (token) {
      config.headers.Authorization = "Bearer " + token;
    }
    console.log(
      `%c ${config.method.toUpperCase()} - ${getUrl(config)}:`,
      "color: #0086b3; font-weight: bold",
      config
    );
    return config;
  },
  (error) => Promise.reject(error)
);

// Intercept all responses
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log(
      `%c ${response.status} - ${getUrl(response.config)}:`,
      "color: #008000; font-weight: bold",
      response
    );

    return response;
  },
  (error) => {
    console.log(
      `%c ${error.response.status} - ${getUrl(error.response.config)}:`,
      "color: #a71d5d; font-weight: bold",
      error.response
    );
    if (error.response.status === 408) {
      eventManager.next({ login: false });
    }
    return Promise.reject(error);
  }
);

export default instance;
