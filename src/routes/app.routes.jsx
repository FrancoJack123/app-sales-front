import Loading from '@/components/common/Loading/Loading';
import Layout from '@/components/shared/Layout/Layout';
import {
  CATEGORY_PAGE,
  CUSTOMER_PAGE,
  PRODUCT_PAGE,
  SUPPLIER_PAGE,
} from '@/utils/contants/paths.contants';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const CustomerModule = lazy(() => import('@/modules/Customer/CustomerModule'));
const ProductModule = lazy(() => import('@/modules/Product/ProductModule'));
const CategoryModule = lazy(() => import('@/modules/Category/CategoryModule'));
const SupplierModule = lazy(() => import('@/modules/Supplier/SupplierModule'));

const PageRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path={`${CUSTOMER_PAGE}/*`} element={<CustomerModule />} />
            <Route path={`${CATEGORY_PAGE}/*`} element={<CategoryModule />} />
            <Route path={`${SUPPLIER_PAGE}/*`} element={<SupplierModule />} />
            <Route path={`${PRODUCT_PAGE}/*`} element={<ProductModule />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default PageRoutes;
