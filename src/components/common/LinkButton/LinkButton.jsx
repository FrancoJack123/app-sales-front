import classNames from 'classnames';
import { Link as LinkRouter } from 'react-router-dom';

const LinkButton = ({ children, className, to, ...props }) => {
  const linkButtonClassName = classNames('btn text-decoration-none', className);
  return (
    <LinkRouter
      to={to}
      className={linkButtonClassName}
      style={{
        backgroundColor: '#e9ecef',
        border: '1px solid #ced4da',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
      {...props}
    >
      {children}
    </LinkRouter>
  );
};

export default LinkButton;
