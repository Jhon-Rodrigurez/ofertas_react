import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { cerrarSesion } from '../connections/usuarioAcciones';
import logoFescNavegador from '../assets/image/logoFescNavegador.png';

function Navegacion() {
  
  const conectado = useSelector((estado) => estado.conectado);
  const usuario = useSelector((estado) => estado.usuario);
  const dispatch = useDispatch();

  const estiloImagen = {
    position: 'absolute',
    top: '2px',
    left: '21%',
    transform: 'translateX(-50%)',
    maxWidth: '100%',
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="fixed-top">
      <Container>
        <Navbar.Brand as={NavLink} to={"/"}>
          <img className="img-fluid" src={logoFescNavegador} alt="" style={estiloImagen} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto justify-content-md-end">
            {conectado && <Nav.Link as={NavLink} to={"/crearoferta"} className='mt-2 mx-4 ms-auto justify-content-md-end'>Crear oferta</Nav.Link>}
            {!conectado ? (
              <React.Fragment>
                <Nav.Link as={NavLink} to={"/signup"} className="mt-2 ms-auto justify-content-md-end">Registrarse</Nav.Link>
                <Nav.Link as={NavLink} to={"/signin"} className="mt-2 ms-auto justify-content-md-end">Iniciar sesión</Nav.Link>
              </React.Fragment>
            ) : (
              <NavDropdown title={usuario.name} id="basic-nav-dropdown" className="mt-2 ms-auto justify-content-md-end">
                <NavDropdown.Item as={NavLink} to={"/misofertas"} className="text-black">Mis ofertas</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to={"/midescripcion"} className="text-black">Mi descripcion</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => dispatch(cerrarSesion())}>Cerrar sesion</NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export {Navegacion}