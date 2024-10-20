import { ErrorMessage } from 'formik';
import Select from 'react-select';
import { Form } from 'react-bootstrap';

const FieldMultiSelect = ({ field, form, label, options }) => {
  const { name, value } = field;
  const { touched, errors, setFieldValue } = form;

  const isInvalid = touched[name] && !!errors[name];

  const selectedValues = Array.isArray(value) ? value.map((v) => (v.id ? v.id : v)) : [];

  const handleChange = (selectedOptions) => {
    setFieldValue(name, selectedOptions ? selectedOptions.map((option) => option.value) : []);
  };

  return (
    <Form.Group className="mb-3">
      <Form.Label htmlFor={name}>{label}</Form.Label>
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
    </Form.Group>
  );
};

export default FieldMultiSelect;
