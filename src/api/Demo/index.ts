import { appConfig } from "../../configs";
import { instance } from "../instance";

const PutPassword = {
  async Password(data: any) {
    return instance.put("/api/authenticate/forgot-password/" + data.username); // phải gắn thêm cái thằng username nữa , nếu không sẽ bị sai link lỗi 404
  },
};

export { PutPassword };
