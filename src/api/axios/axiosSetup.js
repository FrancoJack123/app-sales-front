import axios from 'axios';

const initialization = (config) => {
  const axiosInstance = axios.create(config);

  axiosInstance.interceptors.response.use(
    (response) => {
      return Promise.resolve(response?.data);
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  return axiosInstance;
};

export default initialization;
