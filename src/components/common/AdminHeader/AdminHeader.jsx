import Link from '../Link';

const AdminHeader = ({ title }) => {
  return (
    <>
      <h1>{title}</h1>
      <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item">
          <Link to="/" className="text-dark">
            Dashboard
          </Link>
        </li>
        <li className="breadcrumb-item active">{title}</li>
      </ol>
    </>
  );
};

export default AdminHeader;
