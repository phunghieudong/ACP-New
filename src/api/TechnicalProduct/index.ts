import { instance } from "../instance";

export const GetTechnicalProduct = async (params: {
  pageIndex: number;
  pageSize: number;
}) => {
  try {
    const { pageIndex, pageSize } = params;
    const res = await instance.get(
      `/api/technicalproduct?PageIndex=${pageIndex}&PageSize=${pageSize}&OrderBy=0`
    );
    return res.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
