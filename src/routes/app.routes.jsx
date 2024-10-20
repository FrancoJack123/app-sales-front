import Loading from '@/components/common/Loading/Loading';
import withAuthRedirect from '@/components/HOC/auth-validation.hoc';
import withoutAuthRedirect from '@/components/HOC/without-auth-validation.hoc';
import Layout from '@/components/shared/Layout/Layout';
import {
  CATEGORY_PAGE,
  CUSTOMER_PAGE,
  PRODUCT_PAGE,
  SIGN_IN_PAGE,
  SUPPLIER_PAGE,
} from '@/utils/contants/paths.contants';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

const CustomerModule = lazy(() => import('@/modules/Customer/CustomerModule'));
const ProductModule = lazy(() => import('@/modules/Product/ProductModule'));
const CategoryModule = lazy(() => import('@/modules/Category/CategoryModule'));
const SupplierModule = lazy(() => import('@/modules/Supplier/SupplierModule'));

const SingInController = lazy(() => import('@/pages/Sign-in/SingInController'));

const PageRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route Component={withAuthRedirect(Layout)}>
            <Route path={`${CUSTOMER_PAGE}/*`} element={<CustomerModule />} />
            <Route path={`${CATEGORY_PAGE}/*`} element={<CategoryModule />} />
            <Route path={`${SUPPLIER_PAGE}/*`} element={<SupplierModule />} />
            <Route path={`${PRODUCT_PAGE}/*`} element={<ProductModule />} />
          </Route>
          <Route path={SIGN_IN_PAGE} Component={withoutAuthRedirect(SingInController)} />
          <Route path="*" element={<Navigate to={SIGN_IN_PAGE} />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default PageRoutes;
