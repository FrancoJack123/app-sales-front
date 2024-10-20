const Footer = () => {
  const anio = new Date();
  return (
    <footer className="py-5 bg-white" style={{ marginTop: 'auto' }}>
      <div className="container">
        <p className="m-0 text-center">Copyright &copy; Your Website {anio.getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
