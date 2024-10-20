import ProductApi from '@/api/product.api';
import { useReactMutate, useReactQuery } from '@/api/react-query/reactQuerySetup';

export const useGetProductsWithPagination = (page = 0, size = 6) => {
  return useReactQuery(['getProductsWithPagination', page, size], () =>
    ProductApi.getProductsWithPagination(page, size),
  );
};

export const useGetProducts = () => {
  return useReactQuery(['getProducts'], () => ProductApi.getProducts());
};

export const useGetProductById = (id) => {
  return useReactQuery(['getProductById', id], () => ProductApi.getProductById(id));
};

export const useAddProduct = () => {
  return useReactMutate(['addProduct'], (body) => ProductApi.addProduct(body));
};

export const useEditProduct = () => {
  return useReactMutate(['editProduct'], ({ body, id }) => ProductApi.editProduct(body, id));
};

export const useDeleteProduct = () => {
  return useReactMutate(['deleteProduct'], (id) => ProductApi.deleteProduct(id));
};
