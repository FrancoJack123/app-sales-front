import { Field, Form, Formik } from 'formik';
import { PRODUCT_VALIDATION_SCHEMA } from '../utils/product.utils';
import FieldInput from '@/components/common/FieldInput';
import FieldTextArea from '@/components/common/FieldTextArea';
import FieldSelect from '@/components/common/FieldSelect';
import FieldMultiSelect from '@/components/common/FieldMultiSelect';
import FlexContainer from '@/components/common/FlexContainer';
import Button from '@/components/common/Button';
import GoBackButton from '@/components/common/GoBackButton';

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

export default ProductForm;
