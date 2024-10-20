import CategoryApi from '@/api/category.api';
import { useReactMutate, useReactQuery } from '@/api/react-query/reactQuerySetup';

export const useGetCategoriesWithPagination = (page = 0, size = 6) => {
  return useReactQuery(['getCategoriesWithPagination', page, size], () =>
    CategoryApi.getCategoriesWithPagination(page, size),
  );
};

export const useGetCategories = () => {
  return useReactQuery(['getCategories'], () => CategoryApi.getCategories());
};

export const useGetCategoryById = (id) => {
  return useReactQuery(['getCategoryById', id], () => CategoryApi.getCategoryById(id));
};

export const useAddCategory = () => {
  return useReactMutate(['addCategory'], (body) => CategoryApi.addCategory(body));
};

export const useEditCategory = () => {
  return useReactMutate(['editCategory'], ({ body, id }) => CategoryApi.editCategory(body, id));
};

export const useDeleteCategory = () => {
  return useReactMutate(['deleteCategory'], (id) => CategoryApi.deleteCategory(id));
};
