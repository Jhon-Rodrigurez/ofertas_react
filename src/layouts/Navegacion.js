import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { cerrarSesion } from '../connections/usuarioAcciones';

function Navegacion() {

  const conectado = useSelector(estado=> estado.conectado);
  const usuario = useSelector(estado=> estado.usuario);
  const dispatch = useDispatch();

  return (
    <Navbar bg='dark' variant='dark' expand="lg" className='fixed-top'>
      <Container>
        <Navbar.Brand as={NavLink} to={"/"} className='nombreNav'>JobMatch</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ms-5">
                {conectado &&
                  <Nav.Link as={NavLink} to={"/crearoferta"}>Crear oferta</Nav.Link>
                }
            </Nav>
            <Nav className="ms-auto">
              {!conectado ? (
                <React.Fragment>
                  <Nav.Link as={NavLink} to={"/signup"}>Registrarse</Nav.Link>
                  <Nav.Link as={NavLink} to={"/signin"}>Iniciar sesión</Nav.Link>
                </React.Fragment>
              ):(
                <NavDropdown title={usuario.sub} id="basic-nav-dropdown">
                  <NavDropdown.Item as={NavLink} to={"/misofertas"} className='text-black'>Mis ofertas</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={NavLink} to={"/midescripcion"} className='text-black'>Mi descripcion</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={()=> dispatch(cerrarSesion())}>Cerrar sesion</NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export {Navegacion}