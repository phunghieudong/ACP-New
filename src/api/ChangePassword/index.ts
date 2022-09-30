import { appConfig } from "../../configs";
import { instance } from "../instance";

const ChangePassword = {
  async Password(data: any) {
    return instance.put(
      "/api/authenticate/change-password/dd191af6-1f5e-4af1-bf2f-08da9b88f5ef/",data
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
