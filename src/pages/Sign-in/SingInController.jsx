import { useSingIn } from '@/hooks/auth.hooks';
import SingInView from './SingInView';
import { INITIAL_VALUES } from './utils/singIn.utils';
import { setAccessToken } from '@/utils/helpers/auth.helpers';
import { useNavigate } from 'react-router-dom';
import { CUSTOMER_PAGE } from '@/utils/contants/paths.contants';

const SingInController = () => {
  const navigate = useNavigate();

  const singIn = useSingIn();

  const handleSingIn = async (values) => {
    const response = await singIn.mutateAsync(values);
    if (response?.status) {
      setAccessToken(response?.jwt);
      navigate(CUSTOMER_PAGE);
      console.log(response);
    }
  };

  return <SingInView initialValues={INITIAL_VALUES} onSubmit={handleSingIn} />;
};

export default SingInController;
