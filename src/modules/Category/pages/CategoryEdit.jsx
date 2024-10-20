import Loading from '@/components/common/Loading';
import { useEditCategory, useGetCategoryById } from '@/hooks/category.hooks';
import { CATEGORY_PAGE } from '@/utils/contants/paths.contants';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import CategoryForm from '../components/CategoryForm';

const CategoryEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const editCategory = useEditCategory();
  const { data: category, isRefetching, isLoading } = useGetCategoryById(id);

  const handleEditCategory = async (values) => {
    try {
      await editCategory.mutateAsync({ body: values, id });
      toast.success('La categoria fue editada');
      navigate(CATEGORY_PAGE);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return isLoading || isRefetching ? (
    <Loading />
  ) : (
    <CategoryForm onSubmit={handleEditCategory} initialValues={category} />
  );
};

export default CategoryEdit;
