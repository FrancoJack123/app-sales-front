import { ErrorMessage } from 'formik';
import { Form } from 'react-bootstrap';

const FieldSelect = ({ field, form, label, options }) => {
  const { name } = field;
  const { touched, errors } = form;
  const isInvalid = touched[name] && !!errors[name];

  return (
    <Form.Group className="mb-3">
      <Form.Label htmlFor={name}>{label}</Form.Label>
      <Form.Select {...field} id={name} isInvalid={isInvalid}>
        <option value="">Seleccione una opción</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Form.Select>
      <ErrorMessage name={name} component="div" className="text-danger" />
    </Form.Group>
  );
};

export default FieldSelect;
