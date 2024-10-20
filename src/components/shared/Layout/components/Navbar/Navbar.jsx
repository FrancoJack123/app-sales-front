import Button from '@/components/common/Button';
import FlexContainer from '@/components/common/FlexContainer';
import { CATEGORY_PAGE, CUSTOMER_PAGE, PRODUCT_PAGE, SUPPLIER_PAGE } from '@/utils/contants/paths.contants';
import { Container, Nav, Navbar as NavbarBootstrap } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <NavbarBootstrap collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <NavbarBootstrap.Brand href="#home">NawijoDevs</NavbarBootstrap.Brand>
        <NavbarBootstrap.Toggle aria-controls="responsive-navbar-nav" />
        <NavbarBootstrap.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to={CUSTOMER_PAGE} className="nav-item nav-link">
              Clientes
            </NavLink>
            <NavLink to={CATEGORY_PAGE} className="nav-item nav-link">
              Categorias
            </NavLink>
            <NavLink to={SUPPLIER_PAGE} className="nav-item nav-link">
              Provedores
            </NavLink>
            <NavLink to={PRODUCT_PAGE} className="nav-item nav-link">
              Productos
            </NavLink>
            <NavLink to={PRODUCT_PAGE} className="nav-item nav-link">
              Ordenes
            </NavLink>
            <NavLink to={PRODUCT_PAGE} className="nav-item nav-link">
              Facturas
            </NavLink>
          </Nav>
          <Nav>
            <FlexContainer gap={2}>
              <Button>
                <i className="fa-solid fa-cart-shopping"></i>
              </Button>
              <Button>
                <i className="fa-solid fa-user-plus"></i>
              </Button>
              <Button>
                <i className="fa-solid fa-id-badge"></i>
              </Button>
              <Button>
                <i className="fa-solid fa-right-from-bracket"></i>
              </Button>
            </FlexContainer>
          </Nav>
        </NavbarBootstrap.Collapse>
      </Container>
    </NavbarBootstrap>
  );
};

export default Navbar;
