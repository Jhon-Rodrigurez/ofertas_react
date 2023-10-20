import { Button, Card } from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom';
import React from "react";

const UsuarioCard = ({usuario, editable})=> {

    return (
        <Card className="tarjeta">
            <Card.Header className="mi-card">
                Mi descripcion
                { editable ?
                    <div className="mb-3">
                        <Button variant="primary" size="sm" className="me-3"
                        as={NavLink} to={`/editardescripcion/${usuario.idUsuario}`}
                    >
                            Editar    
                        </Button>
                    </div>
                    : ""
                }
            </Card.Header>
            <Card.Body>
                <Card.Title>
                    <Link className="d-flex justify-content-center fs-4 mb-4" to={`/usuario/${usuario.idUsuario}`}>
                        {usuario.nombre}
                    </Link>
                </Card.Title>
                <Card.Text>
                    Correo: {usuario.email}
                </Card.Text>
                <Card.Text>
                    Celular: {usuario.celular}
                </Card.Text>
                <Card.Text>
                    Descripción de experiencia laboral: {usuario.descripcionExperiencia}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export {UsuarioCard}