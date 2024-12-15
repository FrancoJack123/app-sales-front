import SupplierApi from '@/api/supplier.api';
import { useReactMutate, useReactQuery } from '@/api/react-query/reactQuerySetup';
import { saveAs } from 'file-saver';

export const useGetSuppliersWithPagination = (filters) => {
  return useReactQuery(['getSuppliersWithPagination', filters], () =>
    SupplierApi.getSuppliersWithPagination(filters),
  );
};

export const useGetSuppliers = () => {
  return useReactQuery(['getSuppliers'], () => SupplierApi.getSuppliers());
};

export const useGetSupplierById = (id) => {
  return useReactQuery(['getSupplierById', id], () => SupplierApi.getSupplierById(id));
};

export const useAddSupplier = () => {
  return useReactMutate(['addSupplier'], (body) => SupplierApi.addSupplier(body));
};

export const useEditSupplier = () => {
  return useReactMutate(['editSupplier'], ({ body, id }) => SupplierApi.editSupplier(body, id));
};

export const useDeleteSupplier = () => {
  return useReactMutate(['deleteSupplier'], (id) => SupplierApi.deleteSupplier(id));
};

export const useExportPDF = () => {
  return async () => {
    try {
      const pdfBlob = await SupplierApi.exportPDF();
      console.log(pdfBlob);

      saveAs(pdfBlob, 'suppliers.pdf');
    } catch (error) {
      console.error('Error al descargar el PDF:', error.message);
    }
  };
};

export const useExportExcel = () => {
  return async () => {
    try {
      const excelBlob = await SupplierApi.exportExcel();
      saveAs(excelBlob, 'suppliers.xls');
    } catch (error) {
      console.error('Error al descargar el Excel:', error.message);
    }
  };
};
