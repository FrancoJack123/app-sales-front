import { toast } from 'react-toastify';
import { useDeleteCustomer, useGetCustomersWithPagination } from '@/hooks/customer.hooks';
import Swal from 'sweetalert2';
import { SWEET_ALERT_DELETE_OPTIONS } from '@/utils/contants/alerts.constants';
import Loading from '@/components/common/Loading';
import CustomerTable from '../components/CustomerTable';
import { useFilters } from '@/hooks/filter.hook';

const CustomerList = () => {
  const { filters, updateFilters } = useFilters({
    page: 0,
    size: 6,
    name: '',
    email: '',
    phone: '',
  });

  const deleteCustomer = useDeleteCustomer();
  const { data, refetch, isLoading } = useGetCustomersWithPagination(filters);

  const handleDeleteCustomer = async (id) => {
    const result = await Swal.fire(SWEET_ALERT_DELETE_OPTIONS);
    if (result.isConfirmed) {
      try {
        await deleteCustomer.mutateAsync(id);
        await refetch();
        toast.success('El cliente fue eliminado exitosamente');
        Swal.fire('¡Eliminado!', 'El cliente ha sido eliminado.', 'success');
      } catch (error) {
        toast.error(error.message);
        Swal.fire('Error', 'Hubo un problema al eliminar el cliente', 'error');
      }
    }
  };

  const handlePageChange = (newPage) => {
    updateFilters({ page: newPage });
  };

  const handleSizeChange = (e) => {
    updateFilters({ size: e.target.value, page: 0 });
  };

  const onSubmitFilters = (values, actions) => {
    updateFilters({
      name: values.name,
      email: values.email,
      phone: values.phone,
    });
    actions.setSubmitting(false);
  };

  return isLoading ? (
    <Loading />
  ) : (
    <CustomerTable
      data={data}
      filters={filters}
      onSubmitFilters={onSubmitFilters}
      handleDelete={handleDeleteCustomer}
      handlePageChange={handlePageChange}
      handleSizeChange={handleSizeChange}
    />
  );
};

export default CustomerList;
