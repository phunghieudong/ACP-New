import { instance } from "../instance";

export const getBiddingSession = async (params: {
  pageIndex: number;
  pageSize: number;
  SearchContent: string;
}) => {
  try {
    const res = await instance.get(`/api/biddingsession`, { params });
    return res.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
