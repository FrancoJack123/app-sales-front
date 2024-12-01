import { useSingUp } from '@/hooks/auth.hooks';
import { useNavigate } from 'react-router-dom';
import SingUpView from './SingUpView';
import { INITIAL_VALUES } from './utils/singUp.utils';
import { setAccessToken } from '@/utils/helpers/auth.helpers';
import { CUSTOMER_PAGE } from '@/utils/contants/paths.contants';

const SingUpController = () => {
  const navigate = useNavigate();

  const singUp = useSingUp();

  const handleSingUp = async (values) => {
    const response = await singUp.mutateAsync(values);
    if (response?.status) {
      setAccessToken(response?.jwt);
      navigate(CUSTOMER_PAGE);
    }
  };

  return <SingUpView initialValues={INITIAL_VALUES} onSubmit={handleSingUp} />;
};

export default SingUpController;
