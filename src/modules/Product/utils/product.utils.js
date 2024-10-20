import * as yup from 'yup';

export const PRODUCT_VALIDATION_SCHEMA = yup.object().shape({
  name: yup.string().required('El nombre es obligatorio'),
  description: yup.string().nullable().max(500, 'La descripción no puede exceder 500 caracteres'),
  price: yup
    .number()
    .required('El precio es obligatorio')
    .positive('El precio debe ser un número positivo'),
  stock: yup
    .number()
    .required('El stock es obligatorio')
    .positive('El stock debe ser un número positivo')
    .integer('El stock debe ser un número entero'),
  idSupplier: yup.number().required('El ID del proveedor es obligatorio'),
  idsCategories: yup
    .array()
    .of(yup.number().positive().integer())
    .required('Las categorías son obligatorias')
    .min(1, 'Debes seleccionar al menos una categoría'),
});

export const INITIAL_VALUES = {
  name: '',
  description: '',
  imgUrl: '',
  price: '',
  stock: '',
  idSupplier: '',
  idsCategories: [],
};
