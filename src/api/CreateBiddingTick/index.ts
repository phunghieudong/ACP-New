import { appConfig } from "../../configs";
import { instance } from "../instance";

const PostBiddingTicket = {
  async Ticket(data: any) {
      return instance.post("/api/biddingticket", data);
  }
};

export { PostBiddingTicket };

