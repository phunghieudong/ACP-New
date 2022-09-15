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
