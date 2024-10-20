import { Pagination as BPagination } from 'react-bootstrap';
import './Pagination.css';

const Pagination = ({ page, totalPages, handlePageChange }) => {
  return (
    <BPagination className="mb-0 gap-2 custom-pagination">
      <BPagination.Item onClick={() => handlePageChange(page - 1)} disabled={page === 0}>
        Previous
      </BPagination.Item>

      {[...Array(totalPages || 0)].map((_, index) => (
        <BPagination.Item
          key={index}
          active={index === page}
          onClick={() => handlePageChange(index)}
          className={`${index === page ? 'active' : ''}`}
        >
          {index + 1}
        </BPagination.Item>
      ))}

      <BPagination.Item
        onClick={() => handlePageChange(+page + 1)}
        disabled={page >= totalPages - 1}
      >
        Next
      </BPagination.Item>
    </BPagination>
  );
};

export default Pagination;
