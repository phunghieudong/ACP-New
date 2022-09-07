type IApiResult<T = any> = {
  message: string;
  status: number;
  totalRow: number;
  data: T;
};

type IBase<T = any> = {
  ID: number;
  Status: number;
  Enable: boolean;
  CreatedOn: string;
  CreatedBy: string;
  ModifiedOn: string;
  ModifiedBy: string;
} & T;

type IApiResultData<T = any> = {
  cartId?: any;
  data: T;
  message: string;
  totalRow: number;
  totalRevenue: number;
  listLevel: any;
  isDone: boolean;
};

type IApiResultDataOBJ<T = any> = {
  data: {
    obj: T;
  };
  message: string;
  totalRow: number;
  totalRevenue: number;
  listLevel: any;
  isDone: boolean;
};
