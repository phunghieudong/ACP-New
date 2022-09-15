import { SignInData } from "../../types/Auth";
import instance from "../instance";

export const signIn = async (data: SignInData) => {
  try {
    const res = await instance.post("/authenticate/login", data);
    return res.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getUser = async () => {
  try {
    const res = await instance.get("/medical-record/get-medical-record-info");
    return res.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const accountApi = {
  async login(data: any) {
    var formdata = new FormData();
    formdata.append("username", data?.username);
    formdata.append("password", data?.password);
    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    let temp: any = [];

    await fetch("https://api-acp.monamedia.net/api/authenticate/mobile-login")
      .then((response) => response.text())
      .then((result) => (temp = JSON.parse(result)))
      .catch((error) => console.log("error", error));
    return temp;
  },
  register(data: any) {
    return instance.post("/api/Register", data);
  },
};
