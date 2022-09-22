import { instance } from "../instance";

export const getBiddingSession = async (params: {
  pageIndex: number;
  pageSize: number;
}) => {
  try {  
    const {pageIndex, pageSize } = params; 
    const res = await instance.get(`/api/biddingsession?PageIndex=${pageIndex}&PageSize=${pageSize}&OrderBy=0`)
    return res.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getBiddingSessionDetail = async (id: number) => {
  try {
    const res = await instance.get(`/api/biddingsession/${id}`);
    return res.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
