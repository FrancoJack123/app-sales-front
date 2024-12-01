import { Field, Form, Formik } from 'formik';
import { CUSTOMER_VALIDATION_SCHEMA } from '../utils/customer.utils';
import FieldInput from '@/components/common/FieldInput';
import Button from '@/components/common/Button';
import GoBackButton from '@/components/common/GoBackButton';
import { Col, Row } from 'react-bootstrap';

const CustomerForm = ({ onSubmit, initialValues }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={CUSTOMER_VALIDATION_SCHEMA(initialValues)}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, isSubmitting }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Field name="name" label="Nombre" placeholder="Nombre" component={FieldInput} />
          <Field name="email" label="Email" placeholder="Email" component={FieldInput} />
          <Field name="phone" label="Teléfono" placeholder="Teléfono" component={FieldInput} />
          <Field name="address" label="Dirección" placeholder="Dirección" component={FieldInput} />
          <Field name="city" label="Ciudad" placeholder="Ciudad" component={FieldInput} />
          <Field name="state" label="Estado" placeholder="Estado" component={FieldInput} />
          <Field
            name="zip"
            label="Código Postal"
            placeholder="Código Postal"
            component={FieldInput}
          />

          <Row className="mt-4">
            <Col className="offset-sm-2 col-sm-5 d-grid">
              <Button type="submit" disabled={isSubmitting}>
                Guardar
              </Button>
            </Col>
            <Col className="col-sm-5 d-grid">
              <GoBackButton />
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
};

export default CustomerForm;
