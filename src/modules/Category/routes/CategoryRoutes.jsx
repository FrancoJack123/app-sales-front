import { Route, Routes } from 'react-router-dom';
import CategoryList from '../pages/CategoryList';
import CategoryAdd from '../pages/CategoryAdd';
import CategoryEdit from '../pages/CategoryEdit';

const CategoryRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<CategoryList />} />
      <Route path="add" element={<CategoryAdd />} />
      <Route path="edit/:id" element={<CategoryEdit />} />
    </Routes>
  );
};

export default CategoryRoutes;
