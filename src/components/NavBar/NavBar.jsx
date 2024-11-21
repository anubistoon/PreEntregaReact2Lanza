import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './Logo';       // Asegúrate de que estos componentes existan
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Telefonos" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/redmi">Redmi</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/poco">Poco</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/smarthome">Smart Home</Nav.Link>
            <NavDropdown title="Estilo de Vida" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/accesorios">Accesorios</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/audio">Audio</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/cuidadopersonal">Cuidado Personal</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;