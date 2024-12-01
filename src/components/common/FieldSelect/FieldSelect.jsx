import { ErrorMessage } from 'formik';
import { Col, Form, Row } from 'react-bootstrap';

const FieldSelect = ({ field, form, label, options, isInline = true }) => {
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
        <Form.Select {...field} id={name} isInvalid={isInvalid}>
          <option value="">Seleccione una opción</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Form.Select>
        <ErrorMessage name={name} component="div" className="text-danger" />
      </Col>
    </Form.Group>
  );
};

export default FieldSelect;
