//@ts-nocheck
import instance from "../instance";

export const signIn = async () => {
  try {
    const res = await instance.post("/authenticate/login");
    return res.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
