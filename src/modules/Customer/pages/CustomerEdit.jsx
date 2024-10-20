import { useEditCustomer, useGetCustomerById } from '@/hooks/customer.hooks';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { CUSTOMER_PAGE } from '@/utils/contants/paths.contants';
import Loading from '@/components/common/Loading';
import CustomerForm from '../components/CustomerForm';

const CustomerEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const editCustomer = useEditCustomer();
  const { data: customer, isRefetching, isLoading } = useGetCustomerById(id);

  const handleEditCustomer = async (values) => {
    try {
      await editCustomer.mutateAsync({ body: values, id });
      toast.success('El cliente fue editado');
      navigate(CUSTOMER_PAGE);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return isLoading || isRefetching ? (
    <Loading />
  ) : (
    <CustomerForm onSubmit={handleEditCustomer} initialValues={customer} />
  );
};

export default CustomerEdit;
