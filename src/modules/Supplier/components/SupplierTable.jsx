import Button from '@/components/common/Button';
import FlexContainer from '@/components/common/FlexContainer';
import LinkButton from '@/components/common/LinkButton';
import Pagination from '@/components/common/Pagination';
import PaginationInfo from '@/components/common/PaginationInfo';
import PaginationSizeSelector from '@/components/common/PaginationSizeSelector';
import { SUPPLIER_ADD_PAGE, SUPPLIER_EDIT_PAGE } from '@/utils/contants/paths.contants';
import { Badge, Table } from 'react-bootstrap';

const SupplierTable = ({ data, handleDelete, handlePageChange, handleSizeChange }) => {
  const suppliers = data?.content ?? [];

  return (
    <div>
      <FlexContainer justifyBetween>
        <LinkButton to={SUPPLIER_ADD_PAGE} className="mb-4">
          <i className="fa-solid fa-user-plus"></i> Agregar
        </LinkButton>
        <PaginationSizeSelector size={data?.size} handleSizeChange={handleSizeChange} />
      </FlexContainer>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Ruc</th>
            <th>Contacto</th>
            <th>Productos</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((supplier) => (
            <tr key={supplier.id}>
              <td>{supplier.name}</td>
              <td>{supplier.ruc}</td>
              <td>{supplier.contactInfo}</td>
              <td>
                <FlexContainer gap={2}>
                  {supplier.products.map((product) => (
                    <Badge key={product.id} bg="secondary">
                      {product.name}
                    </Badge>
                  ))}
                </FlexContainer>
              </td>
              <td>
                <FlexContainer justifyCenter gap={2}>
                  <LinkButton to={`${SUPPLIER_EDIT_PAGE}/${supplier.id}`}>
                    <i className="fa-solid fa-pen-to-square"></i>
                  </LinkButton>
                  <Button onClick={() => handleDelete(supplier.id)}>
                    <i className="fa-solid fa-trash-can"></i>
                  </Button>
                </FlexContainer>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <FlexContainer justifyBetween alignItemsCenter>
        <PaginationInfo page={data?.page} size={data?.size} totalElements={data?.totalElements} />
        <Pagination
          page={data?.page}
          totalPages={data?.totalPages}
          handlePageChange={handlePageChange}
        />
      </FlexContainer>
    </div>
  );
};

export default SupplierTable;