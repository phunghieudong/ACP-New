import { instance } from "../instance";

// URL OF API
const url: string = "/api/authenticate/refresh-token/";

const refreshTokenApi = {
  get() {
    return instance.get<IApiResult<any[]>>(url, {});
  },
};

export { refreshTokenApi };
