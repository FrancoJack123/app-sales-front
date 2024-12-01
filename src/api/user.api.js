import { API_USER } from '@/utils/contants/api.paths.contants';
import axiosHelpers from './axios/api';

const UserApi = {
  getInternalUser: () => axiosHelpers.getRequest(`${API_USER}`),
};

export default UserApi;
