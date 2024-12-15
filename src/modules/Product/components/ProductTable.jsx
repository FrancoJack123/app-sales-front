import Button from '@/components/common/Button';
import FieldInput from '@/components/common/FieldInput';
import FieldSelect from '@/components/common/FieldSelect';
import FlexContainer from '@/components/common/FlexContainer';
import LinkButton from '@/components/common/LinkButton';
import Pagination from '@/components/common/Pagination';
import PaginationInfo from '@/components/common/PaginationInfo';
import PaginationSizeSelector from '@/components/common/PaginationSizeSelector';
import { useExportExcel, useExportPDF } from '@/hooks/product.hooks';
import { PRODUCT_ADD_PAGE, PRODUCT_EDIT_PAGE } from '@/utils/contants/paths.contants';
import { Field, Formik } from 'formik';
import { Badge, Card, Table } from 'react-bootstrap';

const ProductTable = ({
  data,
  suppliers,
  onSubmitFilters,
  handleDelete,
  handlePageChange,
  handleSizeChange,
  filters,
}) => {
  const products = data?.content ?? [];

  const exportPDF = useExportPDF();
  const exportExcel = useExportExcel();

  return (
    <div>
      <FlexContainer justifyBetween>
        <FlexContainer gap={2}>
          <LinkButton to={PRODUCT_ADD_PAGE} className="mb-4">
            <i className="fa-solid fa-user-plus"></i> Agregar
          </LinkButton>
          <Button onClick={exportPDF} className="mb-4">
            <i className="fa-solid fa-file-pdf"></i>
          </Button>
          <Button onClick={exportExcel} className="mb-4">
            <i className="fa-solid fa-file-excel"></i>
          </Button>
        </FlexContainer>
        <PaginationSizeSelector size={data?.size} handleSizeChange={handleSizeChange} />
      </FlexContainer>
      <Card className="mb-4">
        <Card.Header>Filtros</Card.Header>
        <Card.Body>
          <Formik gap={3} initialValues={filters} onSubmit={onSubmitFilters}>
            {({ isSubmitting, handleSubmit }) => (
              <FlexContainer alignItemsEnd justifyBetween>
                <Field
                  name="supplierId"
                  label="Proveedor"
                  options={suppliers}
                  component={FieldSelect}
                  isInline={false}
                />
                <Field
                  name="minPrice"
                  label="Minimo Precio"
                  placeholder="Minimo Precio"
                  component={FieldInput}
                  isInline={false}
                />
                <Field
                  name="maxPrice"
                  label="Maximo Precio"
                  placeholder="Maximo Precio"
                  component={FieldInput}
                  isInline={false}
                />
                <div className="mb-3">
                  <Button type="submit" onClick={handleSubmit} disabled={isSubmitting}>
                    Filtrar
                  </Button>
                </div>
              </FlexContainer>
            )}
          </Formik>
        </Card.Body>
      </Card>
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

export default ProductTable;
