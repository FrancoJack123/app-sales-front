import AdminHeader from '@/components/common/AdminHeader';
import CategoryRoutes from './routes/CategoryRoutes';

const CategoryModule = () => {
  return (
    <>
      <AdminHeader title="Categorias" />
      <CategoryRoutes />
    </>
  );
};

export default CategoryModule;
