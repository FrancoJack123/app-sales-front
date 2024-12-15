import initialization from './axiosSetup';
import { axiosRequestConfiguration } from './config';

const axiosInstance = initialization(axiosRequestConfiguration);

const getRequest = (url, config) => {
  return axiosInstance.get(url, { ...config });
};

const postRequest = async (url, body) => {
  return axiosInstance.post(url, body);
};

const putRequest = async (url, body, queryParams) => {
  return axiosInstance.put(url, body, { params: queryParams });
};

const patchRequest = async (url, body, queryParams) => {
  return axiosInstance.patch(url, body, { params: queryParams });
};

const deleteRequest = async (url, id) => {
  return axiosInstance.delete(`${url}/${id}`);
};

const axiosHelpers = { getRequest, postRequest, putRequest, patchRequest, deleteRequest };

export default axiosHelpers;
