import * as yup from 'yup';

export const CATEGORY_VALIDATION_SCHEMA = yup.object().shape({
  name: yup.string().required('El nombre es obligatorio'),
  description: yup.string().nullable().max(500, 'La descripción no puede exceder 500 caracteres'),
});

export const INITIAL_VALUES = {
  name: '',
  description: '',
};
