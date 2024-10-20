const PaginationInfo = ({ page, size, totalElements }) => {
  const start = page * size + 1;
  const end = Math.min((page + 1) * size, totalElements);

  return <span>{`Mostrando ${start} a ${end} de ${totalElements} entradas`}</span>;
};

export default PaginationInfo;
