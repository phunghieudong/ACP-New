import { appConfig } from "../../configs";
import { instance } from "../instance";
const FormData = require("form-data");

const PostBiddingTicket = {
  async Ticket(data: any) {
    const formdata = new FormData();
    formdata.append("quantity", data?.quantity);
    formdata.append("price", data?.price);

    var requestOptions: any = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    let temp: any = [];

    await fetch(appConfig.hostURL + "/api/biddingticket", requestOptions)
      .then((response) => response.text())
      .then((result) => (temp = result))
      .catch((error) => console.log("error", error));

    return temp;
  },

  register(data: any) {
    return instance.post("/api/biddingticket", data);
  },
};

export { PostBiddingTicket };

