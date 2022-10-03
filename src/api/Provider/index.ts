import { appConfig } from "../../configs";
import { instance } from "../instance";

const putProvider = {
  async putapiprovider(data: any) {
    return instance.put("/api/provider", data);
  },
};
export { putProvider };
