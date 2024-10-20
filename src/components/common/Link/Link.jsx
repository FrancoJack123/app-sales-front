import classNames from 'classnames';
import { Link as LinkRouter } from 'react-router-dom';

const Link = ({ children, className, to, ...props }) => {
  const linkClassName = classNames('text-decoration-none', className);
  return (
    <LinkRouter to={to} className={linkClassName} {...props}>
      {children}
    </LinkRouter>
  );
};

export default Link;
