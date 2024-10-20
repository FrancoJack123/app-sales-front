import CustomerApi from '@/api/customer.api';
import { validateUniqueValue } from '@/helpers/validation.helpers';
import { EMAIL_REGEX, PHONE_REGEX } from '@/utils/contants/validation.constants';
import * as yup from 'yup';

export const CUSTOMER_VALIDATION_SCHEMA = (existingCustomer) =>
  yup.object().shape({
    name: yup.string().required('El nombre es obligatorio'),
    email: yup
      .string()
      .matches(EMAIL_REGEX, 'Formato de correo electrónico inválido')
      .required('El correo electrónico es obligatorio')
      .test('email-exists', 'El correo electrónico ya está en uso', async (value) => {
        if (!yup.string().matches(EMAIL_REGEX).isValidSync(value)) {
          return true;
        }
        return validateUniqueValue(value, existingCustomer?.email, CustomerApi.existsCustomerByEmail);
      }),
    phone: yup
      .string()
      .matches(PHONE_REGEX, 'El número de teléfono debe tener exactamente 9 dígitos')
      .required('El teléfono es obligatorio')
      .test('phone-exists', 'El número de teléfono ya está en uso', async (value) => {
        if (!yup.string().matches(PHONE_REGEX).isValidSync(value)) {
          return true;
        }
        return validateUniqueValue(value, existingCustomer?.phone, CustomerApi.existsCustomerByPhone);
      }),
    address: yup.string().required('La dirección es obligatoria'),
    city: yup.string().nullable(),
    state: yup.string().nullable(),
    zip: yup.string().nullable(),
  });

export const INITIAL_VALUES = {
  name: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  state: '',
  zip: '',
};
