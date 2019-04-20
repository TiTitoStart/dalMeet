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
