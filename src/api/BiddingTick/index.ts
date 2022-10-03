import { instance } from "../instance";

export const getBiddingTicket = async (params: {
  pageIndex: number;
  pageSize: number;
}) => {
  try {  
    const res = await instance.get(`/api/biddingticket`,{params})
    return res.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getBiddingTicketDetail = async (id: number) => {
  try {
    const res = await instance.get(`/api/biddingticket/${id}`);
    return res.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
