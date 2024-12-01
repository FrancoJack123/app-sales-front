import { useGetInternalUser } from '@/hooks/user.hooks';
import { SIGN_IN_PAGE } from '@/utils/contants/paths.contants';
import { getAccessToken, removeToken } from '@/utils/helpers/auth.helpers';
import { Navigate } from 'react-router-dom';
import Loading from '../common/Loading';

const withAuthRedirect = (Component) => {
  const WithAuthRedirect = (props) => {
    const { getInternalUser, userInfo } = useGetInternalUser();
    const accessToken = getAccessToken();

    if (!accessToken) return <Navigate to={SIGN_IN_PAGE} replace />;

    if (getInternalUser.isLoading) return <Loading />;

    if (userInfo) return <Component {...props} />;

    removeToken();
    return <Navigate to={SIGN_IN_PAGE} replace />;
  };

  return WithAuthRedirect;
};

export default withAuthRedirect;
