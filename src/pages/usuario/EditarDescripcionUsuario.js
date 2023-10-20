import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ACTUALIZARDESCRIPCIONUSUARIO_PUT_ENDPOINT, USUARIODETALLE_GET_ENDPOINT } from "../../connections/helpers/endpoints";
import { SignupFormulario } from "../../components/usuario/SignupFormulario";
import { Alert, Container, Row, Col, Card } from "react-bootstrap";

function ActualizarDescripcion() {

    const {id}= useParams();
    const [errores, setErrores]= useState({});
    const [usuario, setUsuario]= useState(null);
    const navegar = useNavigate();

    useEffect(()=> {
        axios.get(`${USUARIODETALLE_GET_ENDPOINT}/${id}`
        ).then(respuesta=> {
            setUsuario(respuesta.data);
        }).catch(error=> {
            navegar("/")
        })
    }, [id, navegar]);

    const actualizar = async({celular, descripcionExperiencia, urlLinkedin, urlLogo, urlCv})=> {

        const error={};
        setErrores(error);

        axios.put(`${ACTUALIZARDESCRIPCIONUSUARIO_PUT_ENDPOINT}/${usuario.idUsuario}`, {celular, descripcionExperiencia, urlLinkedin, urlLogo, urlCv})
        .then(respuesta=> {
            navegar("/");
        })
        .catch(err=> {
            setErrores({update: err.respuesta.data.message});
        })

    }

    return (
        <Container className="mt-5 mb-4">
            <Row className="justify-content-md-center">
                <Col sm="12" md="8" lg="6">
                    <h3 className="mt-5 text-center fw-bold text-uppercase">Actualizar datos personales</h3>
                    <Card.Body>
                        {errores.update && <Alert variant="danger">{errores.update}</Alert>}

                        { usuario && 
                            <SignupFormulario
                                errores={errores}
                                callback={actualizar}
                                uCelular={usuario.celular}
                                uDescripcionExperiencia={usuario.descripcionExperiencia}
                                uUrlLinkedin={usuario.urlLinkedin}
                                uUrlLogo={usuario.urlLogo}
                                uUrlCv={usuario.urlCv}
                                editable={true}
                            ></SignupFormulario>
                        }
                    </Card.Body>
                </Col>
            </Row>
        </Container>
    )
}

export {ActualizarDescripcion}