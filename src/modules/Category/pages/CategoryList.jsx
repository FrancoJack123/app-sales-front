import Loading from '@/components/common/Loading';
import { useDeleteCategory, useGetCategoriesWithPagination } from '@/hooks/category.hook';
import { SWEET_ALERT_DELETE_OPTIONS } from '@/utils/contants/alerts.constants';
import { CATEGORY_PAGE } from '@/utils/contants/paths.contants';
import queryString from 'query-string';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import CategoryTable from '../components/CategoryTable';

const CategoryList = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { page = 0, size = 6 } = queryString.parse(location.search);

  const deleteCategory = useDeleteCategory();
  const { data, refetch, isLoading } = useGetCategoriesWithPagination(page, size);

  const handleDeleteCategory = async (id) => {
    const result = await Swal.fire(SWEET_ALERT_DELETE_OPTIONS);
    if (result.isConfirmed) {
      try {
        await deleteCategory.mutateAsync(id);
        await refetch();
        toast.success('La categoria fue eliminada exitosamente');
        Swal.fire('¡Eliminado!', 'La categoria ha sido eliminado.', 'success');
      } catch (error) {
        toast.error(error.message);
        Swal.fire('Error', 'Hubo un problema al eliminar la categoria', 'error');
      }
    }
  };

  const handlePageChange = (newPage) => {
    navigate(`${CATEGORY_PAGE}?page=${newPage}&size=${size}`);
  };

  const handleSizeChange = (e) => {
    const newSize = e.target.value;
    navigate(`${CATEGORY_PAGE}?page=0&size=${newSize}`);
  };

  return isLoading ? (
    <Loading />
  ) : (
    <CategoryTable
      data={data}
      handleDelete={handleDeleteCategory}
      handlePageChange={handlePageChange}
      handleSizeChange={handleSizeChange}
    />
  );
};

export default CategoryList;
