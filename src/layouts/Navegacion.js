import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { cerrarSesion } from "../connections/usuarioAcciones";
import {
  FaFileContract,
  FaUser,
  FaUserPlus,
  FaSignInAlt,
  FaSignOutAlt,
  FaUserEdit,
} from "react-icons/fa";
import logoFescNavegador from "../assets/image/logoFescNavegador.png";

function Navegacion() {
  const conectado = useSelector((estado) => estado.conectado);
  const usuario = useSelector((estado) => estado.usuario);
  const dispatch = useDispatch();

  const estiloImagen = {
    position: "absolute",
    top: "2px",
    left: "21%",
    transform: "translateX(-50%)",
    maxWidth: "100%",
  };

  const estiloIcono = {
    color: "#dc3545",
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="fixed-top">
      <Container>
        {usuario.rol === "1" ? (
          <React.Fragment>
            <Navbar.Brand as={NavLink} to={"/"}>
              <img
                className="img-fluid"
                src={logoFescNavegador}
                alt=""
                style={estiloImagen}
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto justify-content-md-end">
                {conectado && (
                  <Nav.Link
                    as={NavLink}
                    to={"/crearoferta"}
                    className="mt-2 mx-4 ms-auto justify-content-md-end"
                  >
                    <FaFileContract className="mx-1" /> Crear oferta
                  </Nav.Link>
                )}
                {!conectado ? (
                  <React.Fragment>
                    <Nav.Link
                      as={NavLink}
                      to={"/signup"}
                      className="mt-2 ms-auto justify-content-md-end"
                    >
                      <FaUserPlus className="mx-1" /> Registrarse
                    </Nav.Link>
                    <Nav.Link
                      as={NavLink}
                      to={"/signin"}
                      className="mt-2 ms-auto justify-content-md-end"
                    >
                      <FaSignInAlt className="mx-1" /> Iniciar sesión
                    </Nav.Link>
                  </React.Fragment>
                ) : (
                  <NavDropdown
                    title={
                      <span>
                        <FaUser className="mx-1" /> {usuario.name}
                      </span>
                    }
                    id="basic-nav-dropdown"
                    className="mt-2 ms-auto justify-content-md-end"
                  >
                    <NavDropdown.Item
                      as={NavLink}
                      to={"/misofertas"}
                      className="text-black"
                    >
                      <FaFileContract style={estiloIcono} /> Mis ofertas
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      as={NavLink}
                      to={"/midescripcion"}
                      className="text-black"
                    >
                      <FaUserEdit style={estiloIcono} /> Mi descripción
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={() => dispatch(cerrarSesion())}>
                      <FaSignOutAlt style={estiloIcono} /> Cerrar sesión
                    </NavDropdown.Item>
                  </NavDropdown>
                )}
              </Nav>
            </Navbar.Collapse>
          </React.Fragment>
        ) : (
          <>
            <Navbar.Brand as={NavLink} to={"/"}>
              <img
                className="img-fluid"
                src={logoFescNavegador}
                alt=""
                style={estiloImagen}
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto justify-content-md-end">
                {!conectado ? (
                  <React.Fragment>
                    <Nav.Link
                      as={NavLink}
                      to={"/signup"}
                      className="mt-2 ms-auto justify-content-md-end"
                    >
                      <FaUserPlus className="mx-1" /> Registrarse
                    </Nav.Link>
                    <Nav.Link
                      as={NavLink}
                      to={"/signin"}
                      className="mt-2 ms-auto justify-content-md-end"
                    >
                      <FaSignInAlt className="mx-1" /> Iniciar sesión
                    </Nav.Link>
                  </React.Fragment>
                ) : (
                  <NavDropdown
                    title={
                      <span>
                        <FaUser className="mx-1" /> {usuario.name}
                      </span>
                    }
                    id="basic-nav-dropdown"
                    className="mt-2 ms-auto justify-content-md-end"
                  >
                    <NavDropdown.Item
                      as={NavLink}
                      to={"/midescripcion"}
                      className="text-black me-auto"
                    >
                      <FaUserEdit style={estiloIcono} /> Mi descripción
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={() => dispatch(cerrarSesion())}>
                      <FaSignOutAlt style={estiloIcono} /> Cerrar sesión
                    </NavDropdown.Item>
                  </NavDropdown>
                )}
              </Nav>
            </Navbar.Collapse>
          </>
        )}
      </Container>
    </Navbar>
  );
}
export { Navegacion }