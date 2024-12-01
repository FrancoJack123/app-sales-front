import { ErrorMessage } from 'formik';
import Select from 'react-select';
import { Col, Form, Row } from 'react-bootstrap';

const FieldMultiSelect = ({ field, form, label, options, isInline = true }) => {
  const { name, value } = field;
  const { touched, errors, setFieldValue } = form;

  const isInvalid = touched[name] && !!errors[name];
  const labelColSize = isInline ? 2 : 12;
  const inputColSize = isInline ? 10 : 12;

  const selectedValues = Array.isArray(value) ? value.map((v) => (v.id ? v.id : v)) : [];

  const handleChange = (selectedOptions) => {
    setFieldValue(name, selectedOptions ? selectedOptions.map((option) => option.value) : []);
  };

  return (
    <Form.Group as={Row} className="mb-3">
      <Form.Label htmlFor={name} column sm={labelColSize}>
        {label}
      </Form.Label>
      <Col sm={inputColSize}>
        <Select
          id={name}
          name={name}
          value={options ? options.filter((option) => selectedValues.includes(option.value)) : []}
          onChange={handleChange}
          options={options}
          isMulti
          className={isInvalid ? 'is-invalid' : ''}
          classNamePrefix="react-select"
          placeholder="Seleccione una o varias opciones"
        />
        <ErrorMessage name={name} component="div" className="text-danger" />
      </Col>
    </Form.Group>
  );
};

export default FieldMultiSelect;
