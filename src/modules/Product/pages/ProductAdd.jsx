import { useGetCategories } from '@/hooks/category.hooks';
import { useGetSuppliers } from '@/hooks/supplier.hooks';
import { INITIAL_VALUES } from '../utils/product.utils';
import { useAddProduct } from '@/hooks/product.hooks';
import { toast } from 'react-toastify';
import { PRODUCT_PAGE } from '@/utils/contants/paths.contants';
import { useNavigate } from 'react-router-dom';
import ProductForm from '../components/ProductForm';

const ProductAdd = () => {
  const navigate = useNavigate();

  const addProduct = useAddProduct();
  const { data: suppliers, isLoading: isLoadingSuppliers } = useGetSuppliers();
  const { data: categories, isLoading: isLoadingCategories } = useGetCategories();

  const handleAddProduct = async (values) => {
    try {
      await addProduct.mutateAsync(values);
      toast.success('El producto fue agregado');
      navigate(PRODUCT_PAGE);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return isLoadingCategories || isLoadingSuppliers ? (
    <div>Cargando...</div>
  ) : (
    <ProductForm
      initialValues={INITIAL_VALUES}
      categories={categories}
      suppliers={suppliers}
      onSubmit={handleAddProduct}
    />
  );
};

export default ProductAdd;
