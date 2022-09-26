import { appConfig } from "../../configs";
import { instance } from "../instance";

const GetTechnicalProduct = {
  async Password(data: any) {
    return instance.get("/api/technicalproduct/" + data.ProductId); // phải gắn thêm cái thằng username nữa , nếu không sẽ bị sai link lỗi 404
  },
};

export { GetTechnicalProduct };
