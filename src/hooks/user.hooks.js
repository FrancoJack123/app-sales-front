import { useReactQuery } from '@/api/react-query/reactQuerySetup';
import UserApi from '@/api/user.api';
import { addUserInfo, selectUserState } from '@/store/slices/auth.reducer';
import { useDispatch, useSelector } from 'react-redux';

export const useGetInternalUser = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector(selectUserState);

  const getInternalUser = useReactQuery(
    ['getInternalUser'],
    () =>
      UserApi.getInternalUser().then((res) => {
        dispatch(addUserInfo(res));
        return res;
      }),
    { enabled: !userInfo },
  );

  return {
    getInternalUser,
    userInfo,
  };
};
