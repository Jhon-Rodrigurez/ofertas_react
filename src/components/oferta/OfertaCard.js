import { Button, Card } from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom';
import { EliminarOfertaButton } from "../../components/oferta/EliminarOfertaBoton";
import moment from 'moment';
import React from "react";

const OfertaCard= ({oferta, editable, mostrar})=> {

    const fecha = new Date(oferta.fechaExpiracion);

    const ano = fecha.getFullYear();
    const mes = String(fecha.getMonth() + 1).padStart(2, '0');
    const dia = String(fecha.getDate()).padStart(2, '0');

    const fechaFormateada = `${ano}-${mes}-${dia}`;

    return (
        <Card className="tarjeta mt-5 mb-4">
            <Card.Header className="mi-card">
                Termina en el día: {fechaFormateada}
                { editable ?
                <div className="mb-3">
                    <Button variant="primary" size="sm" className="me-3"
                        as={NavLink} to={`/editaroferta/${oferta.idOferta}`}
                    >
                        Editar        
                    </Button>
                    <EliminarOfertaButton id={oferta.idOferta}
                                            titulo={oferta.titulo}/>
                </div>
                : ""
                }
            </Card.Header>
            <Card.Body>
                <Card.Title className="mb-4">
                    <Link className="d-flex justify-content-center fs-2 mb-4" to={`/oferta/${oferta.idOferta}`}>
                        {oferta.titulo}
                    </Link>
                </Card.Title>
                <Card.Text>
                    Descripción: {oferta.descripcion}
                </Card.Text>
                <Card.Text>
                    Lugar: {oferta.ciudad}, {oferta.pais}
                </Card.Text>
                <Card.Text>
                    Lo que buscamos: {oferta.descripcionExperiencia}
                </Card.Text>
                <Card.Text>
                    Creado por {oferta.nombre}, {moment(oferta.creado).fromNow()}
                </Card.Text>
                <Card.Text>
                    { mostrar ?
                        <Link className="ms-2 mb-4" to={`/respuestasofertas/${oferta.idOferta}`}>
                            Ver los aplicantes
                        </Link>
                        : ""
                    }
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export {OfertaCard}