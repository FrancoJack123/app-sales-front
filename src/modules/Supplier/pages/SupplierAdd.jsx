import { useAddSupplier } from '@/hooks/supplier.hooks';
import { useNavigate } from 'react-router-dom';
import SupplierForm from '../components/SupplierForm';
import { INITIAL_VALUES } from '../utils/supplier.utils';
import { toast } from 'react-toastify';
import { SUPPLIER_PAGE } from '@/utils/contants/paths.contants';

const SupplierAdd = () => {
  const navigate = useNavigate();
  const addSupplier = useAddSupplier();

  const handleAddSupplier = async (values) => {
    try {
      await addSupplier.mutateAsync(values);
      toast.success('El proveedor fue agregado');
      navigate(SUPPLIER_PAGE);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return <SupplierForm onSubmit={handleAddSupplier} initialValues={INITIAL_VALUES} />;
};

export default SupplierAdd;
