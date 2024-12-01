import { Route, Routes } from 'react-router-dom';
import OrderAdd from '../pages/OrderAdd';

const OrderRoutes = () => {
  return (
    <Routes>
      <Route path="/add" element={OrderAdd} />
    </Routes>
  );
};

export default OrderRoutes;
