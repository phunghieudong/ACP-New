import { appConfig } from "../../configs";
import { instance } from "../instance";
const FormData = require("form-data");
 
const accountApi = {
  async login(data: any) {
    const formdata = new FormData();
    formdata.append("Username", data?.username);
    formdata.append("Password", data?.password);

    var requestOptions: any = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    let temp: any = [];

    await fetch(
      appConfig.hostURL + "/api/authenticate/mobile-login",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => (temp = JSON.parse(result)))
      .catch((error) => console.log("error", error));

    return temp;
  },

  register(data: any) {
    return instance.post("/api/CreateAccount", data);
  },
};

export { accountApi };

