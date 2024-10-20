import Button from '@/components/common/Button';
import FieldInput from '@/components/common/FieldInput';
import FieldTextArea from '@/components/common/FieldTextArea';
import FlexContainer from '@/components/common/FlexContainer';
import GoBackButton from '@/components/common/GoBackButton';
import { Field, Form, Formik } from 'formik';
import { CATEGORY_VALIDATION_SCHEMA } from '../utils/category.utils';

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
          <FlexContainer gap={2}>
            <Button type="submit" disabled={isSubmitting}>
              Guardar
            </Button>
            <GoBackButton />
          </FlexContainer>
        </Form>
      )}
    </Formik>
  );
};

export default CategoryForm;
