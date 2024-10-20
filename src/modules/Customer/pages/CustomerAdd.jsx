import { useNavigate } from 'react-router-dom';
import { CUSTOMER_PAGE } from '@/utils/contants/paths.contants';
import { toast } from 'react-toastify';
import { useAddCustomer } from '@/hooks/customer.hooks';
import { INITIAL_VALUES } from '../utils/customer.utils';
import CustomerForm from '../components/CustomerForm';

const CustomerAdd = () => {
  const navigate = useNavigate();
  const addCustomer = useAddCustomer();

  const handleAddCustomer = async (values) => {
    try {
      await addCustomer.mutateAsync(values);
      toast.success('El cliente fue agregado');
      navigate(CUSTOMER_PAGE);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return <CustomerForm onSubmit={handleAddCustomer} initialValues={INITIAL_VALUES} />;
};

export default CustomerAdd;
