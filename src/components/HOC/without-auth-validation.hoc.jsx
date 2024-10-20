import { CUSTOMER_PAGE } from '@/utils/contants/paths.contants';
import { Navigate } from 'react-router-dom';

const withoutAuthRedirect = (Component) => {
  const WithoutAuthRedirect = (props) => {
    const accessToken = localStorage.getItem('accessToken');

    return accessToken ? <Navigate to={CUSTOMER_PAGE} replace /> : <Component {...props} />;
  };
  return WithoutAuthRedirect;
};
export default withoutAuthRedirect;
