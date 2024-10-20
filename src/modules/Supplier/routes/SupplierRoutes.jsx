import { Route, Routes } from 'react-router-dom';
import SupplierList from '../pages/SupplierList';
import SupplierAdd from '../pages/SupplierAdd';
import SupplierEdit from '../pages/SupplierEdit';

const SupplierRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<SupplierList />} />
      <Route path="add" element={<SupplierAdd />} />
      <Route path="edit/:id" element={<SupplierEdit />} />
    </Routes>
  );
};

export default SupplierRoutes;
