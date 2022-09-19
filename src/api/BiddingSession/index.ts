import { instance } from "../instance";

export const getBiddingSession = async (params: {
  pageIndex: number;
  pageSize: number;
}) => {
  try {
    const res = await instance.get("/biddingsession", {
      params: { ...params, orderBy: "Id desc" },
    });
    return res.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getBiddingSessionDetail = async (id: number) => {
  try {
    const res = await instance.get(`/biddingsession/${id}`);
    return res.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
