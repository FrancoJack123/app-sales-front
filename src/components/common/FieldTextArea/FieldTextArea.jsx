import { ErrorMessage } from 'formik';
import { Form } from 'react-bootstrap';

const FieldTextArea = ({ field, form, label, rows = 3, type = 'text' }) => {
  const { name } = field;
  const { touched, errors } = form;

  const isInvalid = touched[name] && !!errors[name];

  return (
    <Form.Group className="mb-3">
      <Form.Label htmlFor={name}>{label}</Form.Label>
      <Form.Control
        {...field}
        id={name}
        rows={rows}
        type={type}
        as="textarea"
        isInvalid={isInvalid}
      />
      <ErrorMessage name={name} component="div" className="text-danger" />
    </Form.Group>
  );
};

export default FieldTextArea;
