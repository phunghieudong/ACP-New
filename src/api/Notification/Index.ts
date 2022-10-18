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

export const putNotification = async (params: { id: string }) => {
  try {
    const res = await instance.put(`/api/notification/seen`, { params });
    return res.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
