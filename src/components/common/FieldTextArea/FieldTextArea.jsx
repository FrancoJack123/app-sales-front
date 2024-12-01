import { ErrorMessage } from 'formik';
import { Col, Form, Row } from 'react-bootstrap';

const FieldTextArea = ({ field, form, label, rows = 3, type = 'text', isInline = true }) => {
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
          rows={rows}
          type={type}
          as="textarea"
          isInvalid={isInvalid}
        />
        <ErrorMessage name={name} component="div" className="text-danger" />
      </Col>
    </Form.Group>
  );
};

export default FieldTextArea;
