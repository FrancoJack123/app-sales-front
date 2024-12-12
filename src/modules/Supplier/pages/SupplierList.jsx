import Loading from '@/components/common/Loading';
import { useDeleteSupplier, useGetSuppliersWithPagination } from '@/hooks/supplier.hooks';
import { SWEET_ALERT_DELETE_OPTIONS } from '@/utils/contants/alerts.constants';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import SupplierTable from '../components/SupplierTable';
import { useFilters } from '@/hooks/filter.hook';

const SupplierList = () => {
  const { filters, updateFilters } = useFilters({
    page: 0,
    size: 6,
    name: '',
    ruc: '',
  });

  const deleteSupplier = useDeleteSupplier();
  const { data, refetch, isLoading } = useGetSuppliersWithPagination(filters);

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
    updateFilters({ page: newPage });
  };

  const handleSizeChange = (e) => {
    updateFilters({ size: e.target.value, page: 0 });
  };

  const onSubmitFilters = (values, actions) => {
    updateFilters({
      name: values.name,
      ruc: values.ruc,
    });
    actions.setSubmitting(false);
  };

  return isLoading ? (
    <Loading />
  ) : (
    <SupplierTable
      data={data}
      filters={filters}
      onSubmitFilters={onSubmitFilters}
      handleDelete={handleDeleteSupplier}
      handlePageChange={handlePageChange}
      handleSizeChange={handleSizeChange}
    />
  );
};

export default SupplierList;
