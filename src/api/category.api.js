import { API_CATEGORY } from '@/utils/contants/api.paths.contants';
import axiosHelpers from './axios/api';

const CategoryApi = {
  getCategoriesWithPagination: (page = 0, size = 6) =>
    axiosHelpers.getRequest(`${API_CATEGORY}/paginated?page=${page}&size=${size}`),
  getCategories: () => axiosHelpers.getRequest(API_CATEGORY),
  getCategoryById: (id) => axiosHelpers.getRequest(`${API_CATEGORY}/${id}`),
  addCategory: (body) => axiosHelpers.postRequest(API_CATEGORY, body),
  editCategory: (body, id) => axiosHelpers.putRequest(`${API_CATEGORY}/${id}`, body),
  deleteCategory: (id) => axiosHelpers.deleteRequest(API_CATEGORY, id),
};

export default CategoryApi;
