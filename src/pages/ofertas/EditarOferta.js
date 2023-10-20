import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {ACTUALIZAROFERTA_PUT_ENDPOINT, OFERTADETALLE_GET_ENDPOINT} from "../../connections/helpers/endpoints";
import {CrearOfertaFormulario} from "../../components/oferta/CrearOfertaFormulario";
import { Alert, Card, Col, Container, Row } from "react-bootstrap";

function EditarOferta() {

    const {id} = useParams();
    const [errores, setErrores]= useState({});
    const [oferta, setOferta]= useState(null);
    const navegar = useNavigate();

    useEffect(() =>{
        axios.get(`${OFERTADETALLE_GET_ENDPOINT}/${id}`
        ).then(respuesta=>{
            setOferta(respuesta.data);
        }).catch(error => {
            navegar("/")
        })
    }, [id, navegar]);

    const editar = async({ciudad, pais})=> {

        const error={};
        setErrores(error);

        axios.put(`${ACTUALIZAROFERTA_PUT_ENDPOINT}/${oferta.idOferta}`, {ciudad, pais})
        .then(respuesta=>{
            navegar("/");
        })
        .catch(err=>{
            setErrores({update: err.respuesta.data.message});
        })

    }

    return (
        <Container className="mt-5 mb-4">
            <Row className="justify-content-md-center">
                <Col sm="12" md="8" lg="6">
                    <h3 className="mt-5 text-center fw-bold text-uppercase">Editar oferta</h3>
                    <Card.Body>
                        {errores.update && <Alert variant="danger">{errores.update}</Alert>}

                        { oferta &&
                            <CrearOfertaFormulario
                                errores={errores}
                                callback={editar}
                                oCiudad={oferta.ciudad}
                                oPais={oferta.pais}
                                editable={true}
                            ></CrearOfertaFormulario>
                        }
                    </Card.Body>
                </Col>
            </Row>
        </Container>
    )
}

export {EditarOferta}