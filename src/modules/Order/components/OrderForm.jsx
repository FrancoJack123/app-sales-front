import FieldInput from '@/components/common/FieldInput';
import FieldTextArea from '@/components/common/FieldTextArea';
import { Field, Form, Formik } from 'formik';
import { Card } from 'react-bootstrap';

const OrderForm = () => {
  return (
    <Formik
    // initialValues={initialValues}
    // validationSchema={CATEGORY_VALIDATION_SCHEMA}
    // onSubmit={onSubmit}
    >
      {({ handleSubmit }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Card>
            <Card.Header>Detalle Venta</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Field name="name" label="Nombre" placeholder="Nombre" component={FieldInput} />
          <Field
            name="description"
            label="Descripcion"
            placeholder="Descripcion"
            component={FieldTextArea}
          />
        </Form>
      )}
    </Formik>
  );
};

export default OrderForm;
