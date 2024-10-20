import { QueryClient, useMutation, useQuery } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      enabled: true,
      retry: false,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: false,
    },
  },
});

export const useReactQuery = (queryKey, queryFn, config = {}) => {
  return useQuery({ queryKey, queryFn, ...config });
};

export const useReactMutate = (mutationKey, mutationFn, config = {}) => {
  return useMutation({ mutationKey, mutationFn, ...config });
};
