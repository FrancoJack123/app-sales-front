import CustomerApi from '@/api/customer.api';
import { useReactMutate, useReactQuery } from '@/api/react-query/reactQuerySetup';

export const useGetCustomersWithPagination = (filters) => {
  return useReactQuery(['getCustomersWithPagination', filters], () =>
    CustomerApi.getCustomersWithPagination(filters),
  );
};

export const useGetCustomers = () => {
  return useReactQuery(['getCustomers'], () => CustomerApi.getCustomers());
};

export const useGetCustomerById = (id) => {
  return useReactQuery(['getCustomerById', id], () => CustomerApi.getCustomerById(id));
};

export const useAddCustomer = () => {
  return useReactMutate(['addCustomer'], (body) => CustomerApi.addCustomer(body));
};

export const useEditCustomer = () => {
  return useReactMutate(['editCustomer'], ({ body, id }) => CustomerApi.editCustomer(body, id));
};

export const useDeleteCustomer = () => {
  return useReactMutate(['deleteCustomer'], (id) => CustomerApi.deleteCustomer(id));
};
