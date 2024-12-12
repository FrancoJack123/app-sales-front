import { API_SUPPLIER } from '@/utils/contants/api.paths.contants';
import axiosHelpers from './axios/api';

const SupplierApi = {
  getSuppliersWithPagination: (filters) =>
    axiosHelpers.getRequest(`${API_SUPPLIER}/paginated`, filters),
  getSuppliers: () => axiosHelpers.getRequest(API_SUPPLIER),
  getSupplierById: (id) => axiosHelpers.getRequest(`${API_SUPPLIER}/${id}`),
  existsSupplierByRuc: (ruc) => axiosHelpers.getRequest(`${API_SUPPLIER}/exists/ruc/${ruc}`),
  addSupplier: (body) => axiosHelpers.postRequest(API_SUPPLIER, body),
  editSupplier: (body, id) => axiosHelpers.putRequest(`${API_SUPPLIER}/${id}`, body),
  deleteSupplier: (id) => axiosHelpers.deleteRequest(API_SUPPLIER, id),
};

export default SupplierApi;
