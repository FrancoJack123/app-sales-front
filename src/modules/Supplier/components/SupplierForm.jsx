import Button from '@/components/common/Button';
import FieldInput from '@/components/common/FieldInput';
import FieldTextArea from '@/components/common/FieldTextArea';
import FlexContainer from '@/components/common/FlexContainer';
import GoBackButton from '@/components/common/GoBackButton';
import { Field, Form, Formik } from 'formik';
import { SUPPLIER_VALIDATION_SCHEMA } from '../utils/supplier.utils';

const SupplierForm = ({ onSubmit, initialValues }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SUPPLIER_VALIDATION_SCHEMA(initialValues)}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, isSubmitting }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Field name="name" label="Nombre" placeholder="Nombre" component={FieldInput} />
          <Field name="ruc" label="Ruc" placeholder="Ruc" component={FieldInput} />
          <Field
            name="contactInfo"
            label="Contacto"
            placeholder="Contacto"
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

export default SupplierForm;
