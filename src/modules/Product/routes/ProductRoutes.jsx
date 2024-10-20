import { Route, Routes } from 'react-router-dom';
import ProductList from '../pages/ProductList';
import ProductAdd from '../pages/ProductAdd';
import ProductEdit from '../pages/ProductEdit';

const ProductRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<ProductList />} />
      <Route path="add" element={<ProductAdd />} />
      <Route path="edit/:id" element={<ProductEdit />} />
    </Routes>
  );
};

export default ProductRoutes;
