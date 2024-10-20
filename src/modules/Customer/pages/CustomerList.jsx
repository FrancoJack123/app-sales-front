import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { CUSTOMER_PAGE } from '@/utils/contants/paths.contants';
import { useDeleteCustomer, useGetCustomersWithPagination } from '@/hooks/customer.hooks';
import Swal from 'sweetalert2';
import { SWEET_ALERT_DELETE_OPTIONS } from '@/utils/contants/alerts.constants';
import Loading from '@/components/common/Loading';
import CustomerTable from '../components/CustomerTable';

const CustomerList = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { page = 0, size = 6 } = queryString.parse(location.search);

  const deleteCustomer = useDeleteCustomer();
  const { data, refetch, isLoading } = useGetCustomersWithPagination(page, size);

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
    navigate(`${CUSTOMER_PAGE}?page=${newPage}&size=${size}`);
  };

  const handleSizeChange = (e) => {
    const newSize = e.target.value;
    navigate(`${CUSTOMER_PAGE}?page=0&size=${newSize}`);
  };

  return isLoading ? (
    <Loading />
  ) : (
    <CustomerTable
      data={data}
      handleDelete={handleDeleteCustomer}
      handlePageChange={handlePageChange}
      handleSizeChange={handleSizeChange}
    />
  );
};

export default CustomerList;
