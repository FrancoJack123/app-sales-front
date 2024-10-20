import Loading from '@/components/common/Loading';
import { useDeleteSupplier, useGetSuppliersWithPagination } from '@/hooks/supplier.hooks';
import { SWEET_ALERT_DELETE_OPTIONS } from '@/utils/contants/alerts.constants';
import { SUPPLIER_PAGE } from '@/utils/contants/paths.contants';
import queryString from 'query-string';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import SupplierTable from '../components/SupplierTable';

const SupplierList = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { page = 0, size = 6 } = queryString.parse(location.search);

  const deleteSupplier = useDeleteSupplier();
  const { data, refetch, isLoading } = useGetSuppliersWithPagination(page, size);

  const handleDeleteSupplier = async (id) => {
    const result = await Swal.fire(SWEET_ALERT_DELETE_OPTIONS);
    if (result.isConfirmed) {
      try {
        await deleteSupplier.mutateAsync(id);
        await refetch();
        toast.success('El proveedor fue eliminado exitosamente');
        Swal.fire('¡Eliminado!', 'El proveedor ha sido eliminado.', 'success');
      } catch (error) {
        toast.error(error.message);
        Swal.fire('Error', 'Hubo un problema al eliminar el proveedor', 'error');
      }
    }
  };

  const handlePageChange = (newPage) => {
    navigate(`${SUPPLIER_PAGE}?page=${newPage}&size=${size}`);
  };

  const handleSizeChange = (e) => {
    const newSize = e.target.value;
    navigate(`${SUPPLIER_PAGE}?page=0&size=${newSize}`);
  };

  return isLoading ? (
    <Loading />
  ) : (
    <SupplierTable
      data={data}
      handleDelete={handleDeleteSupplier}
      handlePageChange={handlePageChange}
      handleSizeChange={handleSizeChange}
    />
  );
};

export default SupplierList;
