import { SIGN_IN_PAGE } from '@/utils/contants/paths.contants';
import { removeToken } from '@/utils/helpers/auth.helpers';
import { Navigate } from 'react-router-dom';

const withAuthRedirect = (Component) => {
  const WithAuthRedirect = (props) => {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) return <Component {...props} />;

    removeToken();
    return <Navigate to={SIGN_IN_PAGE} replace />;
  };

  return WithAuthRedirect;
};

export default withAuthRedirect;
