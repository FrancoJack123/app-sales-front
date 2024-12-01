import { ErrorMessage } from 'formik';
import { Col, Form, Row } from 'react-bootstrap';

const FieldInput = ({ field, form, placeholder, label, type = 'text', isInline = true }) => {
  const { name } = field;
  const { touched, errors } = form;

  const isInvalid = touched[name] && !!errors[name];
  const labelColSize = isInline ? 2 : 12;
  const inputColSize = isInline ? 10 : 12;

  return (
    <Form.Group as={Row} className="mb-3">
      <Form.Label htmlFor={name} column sm={labelColSize}>
        {label}
      </Form.Label>
      <Col sm={inputColSize}>
        <Form.Control
          {...field}
          id={name}
          type={type}
          placeholder={placeholder}
          isInvalid={isInvalid}
        />
        <ErrorMessage name={name} component="div" className="text-danger" />
      </Col>
    </Form.Group>
  );
};

export default FieldInput;
