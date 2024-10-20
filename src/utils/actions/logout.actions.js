import { removeToken } from '../helpers/auth.helpers';
import { SIGN_IN_PAGE } from '../contants/paths.contants';
import { persistor } from '@/store/store';

export const logout = () => {
  removeToken();
  persistor.purge().then(() => window.location.assign(SIGN_IN_PAGE));
};
