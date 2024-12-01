import AdminHeader from '@/components/common/AdminHeader';
import OrderRoutes from './routes/OrderRoutes';

const OrderModule = () => {
  return (
    <>
      <AdminHeader title="Ordenes" />
      <OrderRoutes />
    </>
  );
};

export default OrderModule;
