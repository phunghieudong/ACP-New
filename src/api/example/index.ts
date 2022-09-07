// Mẫu file gọi api

import {instance} from '../instance';

// URL OF API
const url: string = '/api/example/';

const example = {
  getAll(params: any) {
    // Ngay chổ any khai báo 1 cái type theo đúng kiểu dữ liệu rồi quăng vô
    // any để mẫu thôi
    return instance.get<IApiResult<any[]>>(url, {
      params,
    });
  },
  getByID(ID: number) {
    return instance.get<IApiResult<any>>(`${url}${ID}`);
  },
  add(data: object) {
    return instance.post(url, data);
  },
  update(data: object) {
    return instance.put(url, data);
  },
  delete(data: any) {
    return instance.put(url, data);
  },
};

export {example};
