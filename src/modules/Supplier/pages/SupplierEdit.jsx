import { useEditSupplier, useGetSupplierById } from '@/hooks/supplier.hooks';
import { useNavigate, useParams } from 'react-router-dom';
import SupplierForm from '../components/SupplierForm';
import Loading from '@/components/common/Loading';
import { SUPPLIER_PAGE } from '@/utils/contants/paths.contants';
import { toast } from 'react-toastify';

const SupplierEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const editSupplier = useEditSupplier();
  const { data: supplier, isRefetching, isLoading } = useGetSupplierById(id);

  const handleEditSupplier = async (values) => {
    try {
      await editSupplier.mutateAsync({ body: values, id });
      toast.success('El proveedor fue editado');
      navigate(SUPPLIER_PAGE);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return isLoading || isRefetching ? (
    <Loading />
  ) : (
    <SupplierForm onSubmit={handleEditSupplier} initialValues={supplier} />
  );
};

export default SupplierEdit;
