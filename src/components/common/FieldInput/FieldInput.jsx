import { ErrorMessage } from 'formik';
import { Form } from 'react-bootstrap';

const FieldInput = ({ field, form, placeholder, label, type = 'text' }) => {
  const { name } = field;
  const { touched, errors } = form;

  const isInvalid = touched[name] && !!errors[name];

  return (
    <Form.Group className="mb-3">
      <Form.Label htmlFor={name}>{label}</Form.Label>
      <Form.Control
        {...field}
        id={name}
        type={type}
        placeholder={placeholder}
        isInvalid={isInvalid}
      />
      <ErrorMessage name={name} component="div" className="text-danger" />
    </Form.Group>
  );
};

export default FieldInput;
