import { instance } from "../instance";

export const getNotification = async (params: {
  pageIndex: number;
  pageSize: number;
  OrderBy: number;
}) => {
  try {
    const res = await instance.get(`/api/notification`, { params });
    return res.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
