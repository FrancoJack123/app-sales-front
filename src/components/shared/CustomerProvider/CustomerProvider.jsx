import { queryClient } from '@/api/react-query/reactQuerySetup';
import { store } from '@/store/store';
import { QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';

const CustomerProvider = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>{children}</Provider>
    </QueryClientProvider>
  );
};

export default CustomerProvider;
