import { appConfig } from "../../configs";
import { instance } from "../instance";

const putNotification = {
  async putapiNotification(data: any) {console.log("data",data);
  
    return instance.put("/api/notification/seen/"+ `${data.id}`);
  },
};
export { putNotification };
// return instance.put("/api/notification/seen/" + `${data.Id}`);