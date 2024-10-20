import { useAddCategory } from '@/hooks/category.hooks';
import { useNavigate } from 'react-router-dom';
import CategoryForm from '../components/CategoryForm';
import { INITIAL_VALUES } from '../utils/category.utils';
import { CATEGORY_PAGE } from '@/utils/contants/paths.contants';
import { toast } from 'react-toastify';

const CategoryAdd = () => {
  const navigate = useNavigate();
  const addCategory = useAddCategory();

  const handleAddCategory = async (values) => {
    try {
      await addCategory.mutateAsync(values);
      toast.success('La categoria fue agregada');
      navigate(CATEGORY_PAGE);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return <CategoryForm onSubmit={handleAddCategory} initialValues={INITIAL_VALUES} />;
};

export default CategoryAdd;
