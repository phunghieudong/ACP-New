import { instance } from "../instance";

export const GetTechnicalProduct = async (params: {
  pageIndex: number;
  pageSize: number;
  ProductId: string;
}) => {
  try {
    const { pageIndex, pageSize, ProductId } = params;
    const res = await instance.get(
      `/api/technicalproduct?ProductId=${ProductId}&PageIndex=${pageIndex}&PageSize=${pageSize}&OrderBy=0`
    );
    return res.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
