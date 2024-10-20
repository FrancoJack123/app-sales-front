import AdminHeader from '@/components/common/AdminHeader';
import ProductRoutes from './routes/ProductRoutes';

const ProductModule = () => {
  return (
    <div>
      <AdminHeader title="Productos" />
      <ProductRoutes />
    </div>
  );
};

export default ProductModule;
