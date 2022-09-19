import { appConfig } from "../../configs";
import { instance } from "../instance";
var FormData = require("form-data");

const accountApi = {
  // async login(data: any) {
  //   var formdata = new FormData();
  //   formdata.append("username", data?.username);
  //   formdata.append("password", data?.password);

  //   var requestOptions: any = {
  //     method: "POST",
  //     body: formdata,
  //     redirect: "follow",
  //   };

  //   let temp: any = [];

  //   await fetch(
  //     appConfig.hostURL + "/api/authenticate/mobile-login",
  //     requestOptions
  //   )
  //     .then((response) => response.text())
  //     .then((result) => (temp = JSON.parse(result)))
  //     .catch((error) => console.log("error", error));

  //   return temp;
  // },
  async login (data:any){
    var formdata = new FormData();
    formdata.append("Username", data?.username);
    formdata.append("Password", data?.password);
  
    var requestOptions: any = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    let temp: any = [];
  
    await fetch(appConfig.hostURL + "/api/authenticate/mobile-login", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch((error) => console.log("error", error));

      return temp;
    },

  register(data: any) {
    return instance.post("/api/CreateAccount", data);
  },
};

export { accountApi };
