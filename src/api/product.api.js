import { API_PRODUCT } from '@/utils/contants/api.paths.contants';
import axiosHelpers from './axios/api';

const ProductApi = {
  getProductsWithPagination: (filters) =>
    axiosHelpers.getRequest(`${API_PRODUCT}/paginated`, { params: filters }),
  getProducts: () => axiosHelpers.getRequest(API_PRODUCT),
  getProductById: (id) => axiosHelpers.getRequest(`${API_PRODUCT}/${id}`),
  addProduct: (body) => axiosHelpers.postRequest(API_PRODUCT, body),
  editProduct: (body, id) => axiosHelpers.putRequest(`${API_PRODUCT}/${id}`, body),
  deleteProduct: (id) => axiosHelpers.deleteRequest(API_PRODUCT, id),
  exportPDF: async () =>
    await axiosHelpers.getRequest(`${API_PRODUCT}/export-pdf`, {
      responseType: 'blob',
    }),
  exportExcel: async () =>
    await axiosHelpers.getRequest(`${API_PRODUCT}/export-xls`, {
      responseType: 'blob',
    }),
};

export default ProductApi;
