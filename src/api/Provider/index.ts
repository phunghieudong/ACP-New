import { appConfig } from "../../configs";
import { instance } from "../instance";

const putProvider = {
  async putapiprovider(data: any) {
    return instance.put("/api/provider/", data);
  },

  async updatetoken(data: any) {
    return instance.put("/api/provider-update-onesignal-deviceid", data);
  },
};
export { putProvider };

// import { instance } from "../instance";

// export const putProvider = async (params: {
//   pageIndex: number;
//   pageSize: number;
//   id: string;
//   fullName: string;
//   phone: number;
//   email: string;
//   address: string;
// }) => {
//   try {
//     const res = await instance.put(`/api/provider`, { params });
//     return res.data;
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };
