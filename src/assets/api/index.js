import ajax from './../ajax/index';
import { baseUrl } from './../config/index';

export default {
  login: data => {
    return ajax.post(`${baseUrl}/api/login`, data);
  },
  signup: data => {
    return ajax.post(`${baseUrl}/api/signup`, data);
  },
  userUpdate: data => {
    return ajax.post(`${baseUrl}/api/users/update`, data);
  },
  userQuery: data => {
    return ajax.post(`${baseUrl}/api/users/query`, data);
  },
  userGet: data => {
    return ajax.post(`${baseUrl}/api/users/get`, data);
  },
  addLike: data => {
    return ajax.post(`${baseUrl}/api/users/addlike`, data);
  },
  getLike: data => {
    return ajax.post(`${baseUrl}/api/users/getlike`, data);
  },
  share: {
    get: data => {
      return ajax.post(`${baseUrl}/api/moment/get`, data);
    },
    add: data => {
      return ajax.post(`${baseUrl}/api/moment/add`, data);
    },
    delete: data => {
      return ajax.post(`${baseUrl}/api/moment/delete`, data);
    }
  }
};
