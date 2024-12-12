import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { SWEET_ALERT_DELETE_OPTIONS } from '@/utils/contants/alerts.constants';
import ProductTable from '../components/ProductTable';
import Loading from '@/components/common/Loading';
import { useDeleteProduct, useGetProductsWithPagination } from '@/hooks/product.hooks';
import { useGetSuppliers } from '@/hooks/supplier.hooks';
import { useFilters } from '@/hooks/filter.hook';

const ProductList = () => {
  const { filters, updateFilters } = useFilters({
    page: 0,
    size: 6,
    supplierId: '',
    minPrice: '',
    maxPrice: '',
  });

  const deleteProduct = useDeleteProduct();
  const { data, refetch, isLoading } = useGetProductsWithPagination(filters);
  const { data: suppliers, isLoading: isLoadingSuppliers } = useGetSuppliers();

  const handleDeleteProduct = async (id) => {
    const result = await Swal.fire(SWEET_ALERT_DELETE_OPTIONS);
    if (result.isConfirmed) {
      try {
        await deleteProduct.mutateAsync(id);
        await refetch();
        toast.success('El producto fue eliminado exitosamente');
        Swal.fire('¡Eliminado!', 'El producto ha sido eliminado.', 'success');
      } catch (error) {
        toast.error(error.message);
        Swal.fire('Error', 'Hubo un problema al eliminar el producto', 'error');
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
      supplierId: values.supplierId,
      minPrice: values.minPrice,
      maxPrice: values.maxPrice,
    });
    actions.setSubmitting(false);
  };

  return isLoading || isLoadingSuppliers ? (
    <Loading />
  ) : (
    <ProductTable
      data={data}
      suppliers={suppliers}
      filters={filters}
      onSubmitFilters={onSubmitFilters}
      handleDelete={handleDeleteProduct}
      handlePageChange={handlePageChange}
      handleSizeChange={handleSizeChange}
    />
  );
};

export default ProductList;
