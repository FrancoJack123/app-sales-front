import { API_CUSTOMER } from '@/utils/contants/api.paths.contants';
import axiosHelpers from './axios/api';

const CustomerApi = {
  getCustomersWithPagination: (filters) =>
    axiosHelpers.getRequest(`${API_CUSTOMER}/paginated`, filters),
  getCustomers: () => axiosHelpers.getRequest(API_CUSTOMER),
  getCustomerById: (id) => axiosHelpers.getRequest(`${API_CUSTOMER}/${id}`),
  existsCustomerByEmail: (email) =>
    axiosHelpers.getRequest(`${API_CUSTOMER}/exists/email/${email}`),
  existsCustomerByPhone: (phone) =>
    axiosHelpers.getRequest(`${API_CUSTOMER}/exists/phone/${phone}`),
  addCustomer: (body) => axiosHelpers.postRequest(API_CUSTOMER, body),
  editCustomer: (body, id) => axiosHelpers.putRequest(`${API_CUSTOMER}/${id}`, body),
  deleteCustomer: (id) => axiosHelpers.deleteRequest(API_CUSTOMER, id),
};

export default CustomerApi;
