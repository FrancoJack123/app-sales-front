import { useGetCategories } from '@/hooks/category.hooks';
import { useEditProduct, useGetProductById } from '@/hooks/product.hooks';
import { useGetSuppliers } from '@/hooks/supplier.hooks';
import { useNavigate, useParams } from 'react-router-dom';
import ProductForm from '../components/ProductForm';
import { toast } from 'react-toastify';
import { PRODUCT_PAGE } from '@/utils/contants/paths.contants';
import Loading from '@/components/common/Loading';

const ProductEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const editProduct = useEditProduct();
  const { data: product, isRefetching, isLoading } = useGetProductById(id);
  const { data: suppliers, isLoading: isLoadingSuppliers } = useGetSuppliers();
  const { data: categories, isLoading: isLoadingCategories } = useGetCategories();

  const handleEditProduct = async (values) => {
    try {
      await editProduct.mutateAsync({ body: values, id });
      toast.success('El producto fue editado');
      navigate(PRODUCT_PAGE);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return isLoading || isRefetching || isLoadingCategories || isLoadingSuppliers ? (
    <Loading />
  ) : (
    <ProductForm
      initialValues={product}
      categories={categories}
      suppliers={suppliers}
      onSubmit={handleEditProduct}
    />
  );
};

export default ProductEdit;
