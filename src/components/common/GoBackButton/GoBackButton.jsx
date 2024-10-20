import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';

const GoBackButton = ({ className, ...props }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const buttonClassName = classNames('btn', className);
  return (
    <button
      type="button"
      className={buttonClassName}
      style={{
        backgroundColor: '#e9ecef',
        border: '1px solid #ced4da',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
      onClick={handleGoBack}
      {...props}
    >
      Regresar
    </button>
  );
};

export default GoBackButton;
