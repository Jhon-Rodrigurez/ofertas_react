import { useState } from "react";
import { Alert, Container, Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { APLICAROFERTA_POST_ENDPOINT } from "../../connections/helpers/endpoints";
import { CrearRespuestaFormulario } from "../../components/oferta/AplicarOfertaFormulario";

function CrearRespuesta() {

    const [errores, setErrores]= useState({});
    const navegar = useNavigate();

    const crear = async({idOferta, experienciaDescripcion, experienciaTiempo})=> {

        const errores={};
        setErrores(errores);

        axios.post(APLICAROFERTA_POST_ENDPOINT, {idOferta, experienciaDescripcion, experienciaTiempo}
            ).then(response=> {
                navegar("/");
            })
            .catch(error=> {
                setErrores({new: error.response.data.message});

            })
    }

    return (
        <Container>
            <Row className="justify-content-md-center mt-5 mb-4">
                <Col sm="12" md="8" lg="6">
                    <h3 className="text-center mt-5 fw-bold fs-3 text-uppercase">Aplicar a oferta</h3>
                    <Card.Body>
                        {errores.new && <Alert variant="danger">{errores.new}</Alert>}

                        <CrearRespuestaFormulario errores={errores} callback={crear}></CrearRespuestaFormulario>
                    </Card.Body>
                </Col>
            </Row>
        </Container>
    )
}

export {CrearRespuesta}