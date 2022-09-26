import { appConfig } from "../../configs";
import { instance } from "../instance";

const PutPassword = {
  async Password(data: any) {
      return instance.put("/api/authenticate/forgot-password/"+ data.username);
  }
};

export { PutPassword };

