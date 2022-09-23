import { instance } from "../instance";

export const getCreateBiddingTick = async (params: {
  pageIndex: number;
  pageSize: number;
}) => {
  try {
    const { pageIndex, pageSize } = params;
    const res = await instance.get(
      `/api/biddingticket?PageIndex=${pageIndex}&PageSize=${pageSize}&OrderBy=0`
    );
    return res.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
