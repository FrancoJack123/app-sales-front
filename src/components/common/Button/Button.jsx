import classNames from 'classnames';

const Button = ({ children, className, ...props }) => {
  const buttonClassName = classNames('btn', className);

  return (
    <button
      className={buttonClassName}
      style={{
        backgroundColor: '#e9ecef',
        border: '1px solid #ced4da',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
