import { API_AUTH } from '@/utils/contants/api.paths.contants';
import axiosHelpers from './axios/api';

const AuthApi = {
  singUp: (body) => axiosHelpers.postRequest(`${API_AUTH}/sign-up`, body),
  singIn: (body) => axiosHelpers.postRequest(`${API_AUTH}/sign-in`, body),
};

export default AuthApi;
