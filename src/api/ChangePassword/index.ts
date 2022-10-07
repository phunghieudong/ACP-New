import { appConfig } from "../../configs";
import { instance } from "../instance";

const ChangePassword = {
  async Password(data: any, params: any) {
    return instance.put(
      "/api/authenticate/change-password/" + `${data.providerId}`,
      params
    ); // phải gắn thêm cái thằng username nữa , nếu không sẽ bị sai link lỗi 404
  },
};
export { ChangePassword };
// export const ChangePassword = async (params: { providerId: string }) => {
//   try {
//     const { providerId } = params;
//     const res = await instance.put(
//       `/api/authenticate/change-password/${providerId}`
//     );
//     return res.data;
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };
