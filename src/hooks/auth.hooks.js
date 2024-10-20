import AuthApi from '@/api/auth.api';
import { useReactMutate } from '@/api/react-query/reactQuerySetup';

export const useSingUp = () => {
  return useReactMutate(['singUp'], (body) => AuthApi.singUp(body));
};

export const useSingIn = () => {
  return useReactMutate(['singIn'], (body) => AuthApi.singIn(body));
};
