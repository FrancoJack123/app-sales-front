import { logout } from '@/utils/actions/logout.actions';
import { getAccessToken } from '@/utils/helpers/auth.helpers';
import { toast } from 'react-toastify';
import axios from 'axios';

const initialization = (config) => {
  const axiosInstance = axios.create(config);

  axiosInstance.interceptors.request.use((request) => {
    const accessToken = getAccessToken();
    accessToken && (request.headers['Authorization'] = `Bearer ${accessToken}`);
    return request;
  });

  axiosInstance.interceptors.response.use(
    (response) => {
      return Promise.resolve(response?.data);
    },
    (error) => {
      if (error.response.status === 401 || error.response.status === 403) {
        logout();
      }
      toast.error(error?.response?.data?.message);
      return Promise.reject(error);
    },
  );

  return axiosInstance;
};

export default initialization;
