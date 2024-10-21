import * as yup from 'yup';

export const SING_UP_VALIDATION_SCHEMA = yup.object().shape({
  firstName: yup.string().required('El nombre es obligatorio'),
  lastName: yup.string().required('El apellido es obligatorio'),
  email: yup
    .string()
    .email('Debe ser un correo electrónico válido')
    .required('El correo es obligatorio'),
  confirmEmail: yup
    .string()
    .oneOf([yup.ref('email'), null], 'Los correos electrónicos deben coincidir')
    .required('Debes confirmar el correo electrónico'),
  password: yup.string().required('La contraseña es obligatoria'),
});

export const INITIAL_VALUES = {
  firstName: '',
  lastName: '',
  email: '',
  confirmEmail: '',
  password: '',
  rolesNames: ['ADMIN'],
};
