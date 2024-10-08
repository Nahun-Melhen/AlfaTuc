import React, { useState } from 'react';
import { Col, Container, Nav, Navbar, Offcanvas, Row } from 'react-bootstrap';
import { Link, NavLink } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import CallIcon from '@mui/icons-material/Call';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ProfileUser from "../profile/ProfileUser";
import { useAuth } from "../../context/UserContext";
import NavbarCart from "../Carrito/Carrito"; 
import '../Carrito/CarritoStyles.css';

const NavBarV1 = ({ producto }) => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [showCarrito, setShowCarrito] = useState(false);
  const { isAuthenticated, user } = useAuth();

  const handleOffcanvas = () => setShowOffcanvas(!showOffcanvas);
  const handleCarrito = () => setShowCarrito(!showCarrito);

  return (
    <Container fluid className='div1'>
      <Row className='py-3'>
        <Navbar expand="lg">
          <Container>
            <Col sm={2} md={2} lg={2}>
              <Link to="/">
                <img className="img-fluid imgNav" src="https://i.postimg.cc/1XFPjbQr/Letras-Del-Tucuman.png" alt="Alfajores-Del-Tucuman-Letras" />
              </Link>
            </Col>
            <Col className="d-none d-lg-block">
              <Nav className="d-flex justify-content-end">
                <NavLink to='/contact' className="mx-3">
                  <CallIcon fontSize="large" style={{ color: 'black'}}/>
                </NavLink>
                {/*<NavLink to='' className="p-0 mx-3 cursor-pointer" onClick={handleCarrito}>
                  <NavbarCart />
  </NavLink>*/}
                {isAuthenticated ? (
                  <ProfileUser/>
                ) : (
                  <NavLink to='/login' className="mx-3">
                    <PersonIcon fontSize="large" style={{ color: 'black'}}/>
                  </NavLink>
                )}
              </Nav>
            </Col>
            <Col className='d-flex justify-content-end d-lg-none'>
              {/*<Navbar.Toggle className='p-2 mx-2 justify-content-end border-0' aria-controls="basic-navbar-nav" onClick={handleCarrito}><NavbarCart /></Navbar.Toggle>*/}
              <Navbar.Toggle className="justify-content-end" aria-controls="basic-navbar-nav" onClick={handleOffcanvas} />
            </Col>
          </Container>
        </Navbar>
      </Row>
      <Container>
        <Row>
          <Col className="d-none d-lg-block pb-2">
            <Nav variant="underline" defaultActiveKey="/">
              <Nav.Item>
                <Nav.Link as={NavLink} className='text-danger' to="/products">PRODUCTOS</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={NavLink} className='text-danger' to="/novedad">NOVEDADES</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={NavLink} className='text-danger' to="/locales">SUCURSALES</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={NavLink} className='text-danger' to="/about">SOBRE NOSOTROS</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
                  
      <Offcanvas show={showOffcanvas} className={showOffcanvas ? 'offcanvas-anim' : ''} onHide={handleOffcanvas} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            {isAuthenticated ? (
              <div className='d-flex align-items-end'> 
                <ProfileUser/>
                <p className="fs-5 m-0 text-black">Hola!! {user && user.name}</p>
              </div>
            ) : (
              <NavLink to='/login' className="mx-3">
                <PersonIcon fontSize="large" style={{ color: 'black'}}/>
              </NavLink>
            )}
            <Nav.Link as={NavLink} className='text-danger' to="/about">NOSOTROS</Nav.Link>
            <Nav.Link as={NavLink} className='text-danger' to="/products">PRODUCTOS</Nav.Link>
            <Nav.Link as={NavLink} className='text-danger' to="/novedad">NOVEDADES</Nav.Link>
            <Nav.Link as={NavLink} className='text-danger' to="/locales">LOCALES</Nav.Link>
            <Nav.Link as={NavLink} className='text-danger' to="/contact">CONTACTO</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </Container>
  );
};

export default NavBarV1;
