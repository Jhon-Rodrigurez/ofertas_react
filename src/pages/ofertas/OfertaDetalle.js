import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";
import {OFERTADETALLE_GET_ENDPOINT} from '../../connections/helpers/endpoints';
import { Link } from "react-router-dom";
import { Card, Col, Container, Row } from 'react-bootstrap';
import moment from "moment";

const OfertaDetalle = ({oferta})=> {

    const [ofertas, setOferta] = useState(null);
    const {id} = useParams();
    const navegar = useNavigate();

    const fecha = new Date(oferta);

    const ano = fecha.getFullYear();
    const mes = String(fecha.getMonth() + 1).padStart(2, '0');
    const dia = String(fecha.getDate()).padStart(2, '0');

    const fechaFormateada = `${ano}-${mes}-${dia}`;

    useEffect(()=> {
        axios.get(`${OFERTADETALLE_GET_ENDPOINT}/${id}`)
        .then(respuesta=> {
            setOferta(respuesta.data);
        }).catch(err=> {
            navegar(-1);
        })
    }, [id, navegar]);

    return (
        <Container className="mt-5 mb-5">
            <Row className="justify-content-md-center">
                <Col sm="12" md="8" lg="6">
                    <h3 className="text-center fw-bold mt-5 mb-5 fs-3 text-uppercase">Detalle oferta</h3>
                    {ofertas && (
                        <Card className="mi-card">
                            <Card.Header>
                                Fecha de expiración: {fechaFormateada}
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    Título: {ofertas.titulo}
                                </Card.Text>
                                <Card.Text>
                                    Lugar: {ofertas.ciudad}, {ofertas.pais}
                                </Card.Text>
                                <Card.Text>
                                    Descripción del empleo: {ofertas.descripcion}
                                </Card.Text>
                                <Card.Text>
                                    ¿Qué buscamos en ti?  {ofertas.descripcionExperiencia}
                                </Card.Text>
                                <Card.Text>
                                    Experiencia necesaria: {ofertas.tiempoExperiencia}
                                </Card.Text>
                                <Card.Text>
                                    Experiencia mínima: {ofertas.tiempoEstimado}
                                </Card.Text>
                                <Card.Text>
                                    Creado por {ofertas.nombre}, {moment(ofertas.creado).fromNow()}
                                </Card.Text>
                            </Card.Body>
                            <Card.Text>
                                <Link className="ms-3 d-flex justify-content-center fs-5" to={`/oferta/aplicar?id=${ofertas.idOferta}`}>
                                    Aplicar a oferta
                                </Link>
                            </Card.Text>
                        </Card>
                    )}
                </Col>
            </Row>
        </Container>
    )
}

export {OfertaDetalle}