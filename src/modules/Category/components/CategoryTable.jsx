import Button from '@/components/common/Button';
import FlexContainer from '@/components/common/FlexContainer';
import LinkButton from '@/components/common/LinkButton';
import Pagination from '@/components/common/Pagination';
import PaginationInfo from '@/components/common/PaginationInfo';
import PaginationSizeSelector from '@/components/common/PaginationSizeSelector';
import { CATEGORY_ADD_PAGE, CATEGORY_EDIT_PAGE } from '@/utils/contants/paths.contants';
import { Badge, Table } from 'react-bootstrap';

const CategoryTable = ({ data, handleDelete, handlePageChange, handleSizeChange }) => {
  const categories = data?.content ?? [];

  return (
    <div>
      <FlexContainer justifyBetween>
        <LinkButton to={CATEGORY_ADD_PAGE} className="mb-4">
          <i className="fa-solid fa-user-plus"></i> Agregar
        </LinkButton>
        <PaginationSizeSelector size={data?.size} handleSizeChange={handleSizeChange} />
      </FlexContainer>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Productos</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td>{category.name}</td>
              <td>{category.description}</td>
              <td>
                <FlexContainer gap={2}>
                  {category.products.map((product) => (
                    <Badge key={product.id} bg="secondary">
                      {product.name}
                    </Badge>
                  ))}
                </FlexContainer>
              </td>
              <td>
                <FlexContainer justifyCenter gap={2}>
                  <LinkButton to={`${CATEGORY_EDIT_PAGE}/${category.id}`}>
                    <i className="fa-solid fa-pen-to-square"></i>
                  </LinkButton>
                  <Button onClick={() => handleDelete(category.id)}>
                    <i className="fa-solid fa-trash-can"></i>
                  </Button>
                </FlexContainer>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <FlexContainer column justifyBetween alignItemsCenter className="flex-md-row">
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

export default CategoryTable;
