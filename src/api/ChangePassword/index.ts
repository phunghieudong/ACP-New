import { appConfig } from "../../configs";
import { instance } from "../instance";

const ChangePassword = {
  async Password(data: any) {
    return instance.put(
      "/api/authenticate/change-password/e0ea6f06-3184-4bf3-5892-08daa6ad9043/",
      data
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
