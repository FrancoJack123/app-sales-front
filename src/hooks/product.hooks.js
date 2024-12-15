import ProductApi from '@/api/product.api';
import { useReactMutate, useReactQuery } from '@/api/react-query/reactQuerySetup';
import { saveAs } from 'file-saver';

export const useGetProductsWithPagination = (filters) => {
  return useReactQuery(['getProductsWithPagination', filters], () =>
    ProductApi.getProductsWithPagination(filters),
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

export const useExportPDF = () => {
  return async () => {
    try {
      const pdfBlob = await ProductApi.exportPDF();
      console.log(pdfBlob);

      saveAs(pdfBlob, 'products.pdf');
    } catch (error) {
      console.error('Error al descargar el PDF:', error.message);
    }
  };
};

export const useExportExcel = () => {
  return async () => {
    try {
      const excelBlob = await ProductApi.exportExcel();
      saveAs(excelBlob, 'products.xls');
    } catch (error) {
      console.error('Error al descargar el Excel:', error.message);
    }
  };
};
