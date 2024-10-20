import { Route, Routes } from 'react-router-dom';
import CustomerList from '../pages/CustomerList';
import CustomerAdd from '../pages/CustomerAdd';
import CustomerEdit from '../pages/CustomerEdit';

const CustomerRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<CustomerList />} />
      <Route path="add" element={<CustomerAdd />} />
      <Route path="edit/:id" element={<CustomerEdit />} />
    </Routes>
  );
};

export default CustomerRoutes;
