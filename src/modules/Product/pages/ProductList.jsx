import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { PRODUCT_PAGE } from '@/utils/contants/paths.contants';
import Swal from 'sweetalert2';
import { SWEET_ALERT_DELETE_OPTIONS } from '@/utils/contants/alerts.constants';
import ProductTable from '../components/ProductTable';
import Loading from '@/components/common/Loading';
import { useDeleteProduct, useGetProductsWithPagination } from '@/hooks/product.hooks';

const ProductList = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { page = 0, size = 6 } = queryString.parse(location.search);

  const deleteProduct = useDeleteProduct();
  const { data, refetch, isLoading } = useGetProductsWithPagination(page, size);

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
    navigate(`${PRODUCT_PAGE}?page=${newPage}&size=${size}`);
  };

  const handleSizeChange = (e) => {
    const newSize = e.target.value;
    navigate(`${PRODUCT_PAGE}?page=0&size=${newSize}`);
  };

  return isLoading ? (
    <Loading />
  ) : (
    <ProductTable
      data={data}
      handleDelete={handleDeleteProduct}
      handlePageChange={handlePageChange}
      handleSizeChange={handleSizeChange}
    />
  );
};

export default ProductList;
