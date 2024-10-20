import SupplierApi from '@/api/supplier.api';
import { validateUniqueValue } from '@/helpers/validation.helpers';
import { RUC_REGEX } from '@/utils/contants/validation.constants';
import * as yup from 'yup';

export const SUPPLIER_VALIDATION_SCHEMA = (existingSupplier) =>
  yup.object().shape({
    name: yup.string().required('El nombre es obligatorio'),
    ruc: yup
      .string()
      .matches(RUC_REGEX, 'Formato de ruc inválido')
      .required('El ruc es obligatorio')
      .test('ruc-exists', 'El ruc ya está en uso', async (value) => {
        if (!yup.string().matches(RUC_REGEX).isValidSync(value)) {
          return true;
        }
        return validateUniqueValue(value, existingSupplier?.ruc, SupplierApi.existsSupplierByRuc);
      }),
    contactInfo: yup
      .string()
      .required('El contacto es obligatorio')
      .max(500, 'El contacto no puede exceder 500 caracteres'),
  });

export const INITIAL_VALUES = {
  name: '',
  ruc: '',
  contactInfo: '',
};
