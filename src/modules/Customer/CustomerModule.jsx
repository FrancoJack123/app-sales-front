import AdminHeader from '@/components/common/AdminHeader';
import CustomerRoutes from './routes/CustomerRoutes';

const CustomerModule = () => {
  return (
    <>
      <AdminHeader title="Clientes" />
      <CustomerRoutes />
    </>
  );
};

export default CustomerModule;
