import { API_PRODUCT } from '@/utils/contants/api.paths.contants';
import axiosHelpers from './axios/api';

const ProductApi = {
  getProductsWithPagination: (page = 0, size = 6) =>
    axiosHelpers.getRequest(`${API_PRODUCT}/paginated?page=${page}&size=${size}`),
  getProducts: () => axiosHelpers.getRequest(API_PRODUCT),
  getProductById: (id) => axiosHelpers.getRequest(`${API_PRODUCT}/${id}`),
  addProduct: (body) => axiosHelpers.postRequest(API_PRODUCT, body),
  editProduct: (body, id) => axiosHelpers.putRequest(`${API_PRODUCT}/${id}`, body),
  deleteProduct: (id) => axiosHelpers.deleteRequest(API_PRODUCT, id),
};

export default ProductApi;
