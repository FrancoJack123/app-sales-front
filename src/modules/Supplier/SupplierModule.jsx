import AdminHeader from '@/components/common/AdminHeader';
import SupplierRoutes from './routes/SupplierRoutes';

const SupplierModule = () => {
  return (
    <>
      <AdminHeader title="Proveedores" />
      <SupplierRoutes />
    </>
  );
};

export default SupplierModule;
