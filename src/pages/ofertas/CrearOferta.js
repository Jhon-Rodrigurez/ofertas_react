import { useState } from "react";
import { Alert, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CREAROFERTA_POST_ENDPOINT } from "../../connections/helpers/endpoints";
import {CrearOfertaFormulario} from "../../components/oferta/CrearOfertaFormulario";

function CrearOferta() {

    const [errores, setErrores]= useState({});
    const navegar= useNavigate();

    const crear= async ({titulo, descripcion, idArea, fechaExpiracion, tiempoEstimado, descripcionExperiencia, tiempoExperiencia}) => {

        const errores={};
        setErrores(errores);

        axios.post(CREAROFERTA_POST_ENDPOINT, {titulo, descripcion, idArea, fechaExpiracion, tiempoEstimado, descripcionExperiencia, tiempoExperiencia}
            ).then(response=>{
                navegar(`/oferta/${response.data.idOferta}`);
            })
            .catch(error=>{
                setErrores({new: error.response.data.message});
            })
    }

    return (
        <Container>
            <Row className="justify-content-md-center mt-5 mb-4">
                <Col sm="12" md="8" lg="6">  
                    <h3 className="text-center mt-5 fw-bold fs-3 text-uppercase">Crear oferta</h3>
                    <Card.Body className='mt-4'>
                        {errores.new && <Alert variant="danger">{errores.new}</Alert>}

                        <CrearOfertaFormulario errores={errores} callback={crear} editable={false}/>
                    </Card.Body>
                </Col>
            </Row>
        </Container>
    )
}

export {CrearOferta}