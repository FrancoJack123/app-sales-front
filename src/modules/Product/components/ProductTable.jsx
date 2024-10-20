import Button from '@/components/common/Button';
import FlexContainer from '@/components/common/FlexContainer';
import LinkButton from '@/components/common/LinkButton';
import Pagination from '@/components/common/Pagination';
import PaginationInfo from '@/components/common/PaginationInfo';
import PaginationSizeSelector from '@/components/common/PaginationSizeSelector';
import { PRODUCT_ADD_PAGE, PRODUCT_EDIT_PAGE } from '@/utils/contants/paths.contants';
import { Badge, Table } from 'react-bootstrap';

const ProductTable = ({ data, handleDelete, handlePageChange, handleSizeChange }) => {
  const products = data?.content ?? [];

  return (
    <div>
      <FlexContainer justifyBetween>
        <LinkButton to={PRODUCT_ADD_PAGE} className="mb-4">
          <i className="fa-solid fa-user-plus"></i> Agregar
        </LinkButton>
        <PaginationSizeSelector size={data?.size} handleSizeChange={handleSizeChange} />
      </FlexContainer>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Proveedor</th>
            <th>Categorias</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>$ {product.price}</td>
              <td>{product.stock}</td>
              <td>{product.supplier.name}</td>
              <td>
                <FlexContainer gap={2}>
                  {product.categories.map((category) => (
                    <Badge key={category.id} bg="secondary">
                      {category.name}
                    </Badge>
                  ))}
                </FlexContainer>
              </td>
              <td>
                <FlexContainer justifyCenter gap={2}>
                  <LinkButton to={`${PRODUCT_EDIT_PAGE}/${product.id}`}>
                    <i className="fa-solid fa-pen-to-square"></i>
                  </LinkButton>
                  <Button onClick={() => handleDelete(product.id)}>
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

export default ProductTable;
