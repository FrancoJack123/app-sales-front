import * as yup from 'yup';

export const SING_IN_VALIDATION_SCHEMA = yup.object().shape({
  email: yup
    .string()
    .email('El correo electrónico no es válido')
    .required('El correo electrónico es obligatorio'),
  password: yup.string().required('La contraseña es obligatoria'),
});

export const INITIAL_VALUES = {
  password: '',
  email: '',
};
