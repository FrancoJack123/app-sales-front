import { Form } from 'react-bootstrap';

const PaginationSizeSelector = ({ size, handleSizeChange, options = [6, 10] }) => {
  return (
    <Form.Group controlId="paginationSizeSelector" className="pagination-size-selector">
      <Form.Select
        value={size}
        onChange={handleSizeChange}
        aria-label="Seleccionar tamaño de página"
        className="custom-select"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  );
};

export default PaginationSizeSelector;
