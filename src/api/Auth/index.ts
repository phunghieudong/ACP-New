import { SignInData } from "../../types/Auth";
import { instance } from "../instance";

export const signIn = async (data: SignInData) => {
  try {
    const res = await instance.post("/authenticate/login", data);
    return res.data;
  } catch (error) {
    console.log("phunghiee=udong", data);
    return Promise.reject(error);
  }
};
4;
