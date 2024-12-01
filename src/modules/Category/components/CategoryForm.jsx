import Button from '@/components/common/Button';
import FieldInput from '@/components/common/FieldInput';
import FieldTextArea from '@/components/common/FieldTextArea';
import GoBackButton from '@/components/common/GoBackButton';
import { Field, Form, Formik } from 'formik';
import { CATEGORY_VALIDATION_SCHEMA } from '../utils/category.utils';
import { Col, Row } from 'react-bootstrap';

const CategoryForm = ({ onSubmit, initialValues }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={CATEGORY_VALIDATION_SCHEMA}
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

export default CategoryForm;
