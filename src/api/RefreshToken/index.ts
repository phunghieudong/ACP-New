import { instance } from "../instance";

export const getRefreshToken = async () => {
  try {
    const res = await instance.get(`/api/authenticate/refresh-token`);
    return res.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
