import { queryClient } from '@/api/react-query/reactQuerySetup';
import { QueryClientProvider } from '@tanstack/react-query';

const CustomerProvider = ({ children }) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default CustomerProvider;
