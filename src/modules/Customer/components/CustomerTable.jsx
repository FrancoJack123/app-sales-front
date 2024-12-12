import Button from '@/components/common/Button';
import FieldInput from '@/components/common/FieldInput';
import FlexContainer from '@/components/common/FlexContainer';
import LinkButton from '@/components/common/LinkButton';
import Pagination from '@/components/common/Pagination';
import PaginationInfo from '@/components/common/PaginationInfo';
import PaginationSizeSelector from '@/components/common/PaginationSizeSelector';
import { CUSTOMER_ADD_PAGE, CUSTOMER_EDIT_PAGE } from '@/utils/contants/paths.contants';
import { Field, Formik } from 'formik';
import { Card, Table } from 'react-bootstrap';

const CustomerTable = ({
  data,
  filters,
  onSubmitFilters,
  handleDelete,
  handlePageChange,
  handleSizeChange,
}) => {
  const customers = data?.content ?? [];

  return (
    <div>
      <FlexContainer justifyBetween>
        <LinkButton to={CUSTOMER_ADD_PAGE} className="mb-4">
          <i className="fa-solid fa-user-plus"></i> Agregar
        </LinkButton>
        <PaginationSizeSelector size={data?.size} handleSizeChange={handleSizeChange} />
      </FlexContainer>

      <Card className="mb-4">
        <Card.Header>Filtros</Card.Header>
        <Card.Body>
          <Formik gap={3} initialValues={filters} onSubmit={onSubmitFilters}>
            {({ isSubmitting, handleSubmit }) => (
              <FlexContainer gap={3} alignItemsEnd>
                <Field
                  name="name"
                  label="Nombre del Cliente"
                  placeholder="Nombre del Cliente"
                  component={FieldInput}
                  isInline={false}
                />
                <Field
                  name="email"
                  label="Email del Cliente"
                  placeholder="Email del Cliente"
                  component={FieldInput}
                  isInline={false}
                />
                <Field
                  name="phone"
                  label="Telefono del Cliente"
                  placeholder="Telefono del Cliente"
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
            <th>Email</th>
            <th>Telefono</th>
            <th>Ubicacion</th>
            <th>Ciudad</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.phone}</td>
              <td>{customer.address}</td>
              <td>{customer.city}</td>
              <td>
                <FlexContainer justifyCenter gap={2}>
                  <LinkButton to={`${CUSTOMER_EDIT_PAGE}/${customer.id}`}>
                    <i className="fa-solid fa-pen-to-square"></i>
                  </LinkButton>
                  <Button onClick={() => handleDelete(customer.id)}>
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

export default CustomerTable;
