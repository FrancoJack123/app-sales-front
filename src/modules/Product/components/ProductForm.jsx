import { Field, Form, Formik } from 'formik';
import { PRODUCT_VALIDATION_SCHEMA } from '../utils/product.utils';
import FieldInput from '@/components/common/FieldInput';
import FieldTextArea from '@/components/common/FieldTextArea';
import FieldSelect from '@/components/common/FieldSelect';
import FieldMultiSelect from '@/components/common/FieldMultiSelect';
import Button from '@/components/common/Button';
import GoBackButton from '@/components/common/GoBackButton';
import { Col, Row } from 'react-bootstrap';

const ProductForm = ({ initialValues, categories, suppliers, onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={PRODUCT_VALIDATION_SCHEMA}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, isSubmitting }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Field name="name" label="Nombre" placeholder="Nombre" component={FieldInput} />
          <Field
            name="description"
            label="Descripcion"
            placeholder="Descripcion"
            component={FieldTextArea}
          />
          <Field name="price" label="Precio" placeholder="Precio" component={FieldInput} />
          <Field name="stock" label="Stock" placeholder="Stock" component={FieldInput} />
          <Field name="idSupplier" label="Proveedor" options={suppliers} component={FieldSelect} />
          <Field
            name="idsCategories"
            label="Categorías"
            options={categories}
            component={FieldMultiSelect}
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

export default ProductForm;
