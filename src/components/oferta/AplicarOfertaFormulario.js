import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";

function CrearRespuestaFormulario({errores, callback, rIdOferta="", rExperienciaDescripcion = "", rExperienciaTiempo = ""}) {

    const { id } = useParams();
    const [idOferta, setIdOferta] = useState(rIdOferta);
    const [experienciaDescripcion, setExperienciaDescripcion] = useState(rExperienciaDescripcion);
    const [experienciaTiempo, setExperienciaTiempo] = useState(rExperienciaTiempo);

    useEffect(() => {
        setIdOferta(id);
      }, [id]);

    const enviar = (e)=> {
        e.preventDefault();
        callback({idOferta, experienciaDescripcion, experienciaTiempo})
    }

    return (
        <Form onSubmit={enviar}>
            <Row>
                <Col md="6" xs="12">
                    <Form.Group className="mt-3 mb-3" controlId="idOferta">
                        <Form.Label>Id oferta</Form.Label>
                        <Form.Control
                        type="text"
                        placeholder="Id de oferta"
                        value={idOferta}
                        onChange={(e) => setIdOferta(e.target.value)}
                        isInvalid={errores.idOferta}
                        required
                        >
                        </Form.Control>

                        <Form.Control.Feedback>
                        {errores.idOferta}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col md="6" xs="12">
                    <Form.Group className="mt-3 mb-3" controlId="experienciaDescripcion">
                        <Form.Label>Descripcion de experiencia</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingrese su experiencia en el puesto"
                            value={experienciaDescripcion}
                            onChange={e=>setExperienciaDescripcion(e.target.value)}
                            isInvalid={errores.experienciaDescripcion}
                            required
                        >
                        </Form.Control>

                        <Form.Control.Feedback>
                            {errores.experienciaDescripcion}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col md="6" xs="12">
                    <Form.Group className="mt-3 mb-3" controlId="experienciaTiempo">
                        <Form.Label>Tiempo de experiencia</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingrese su tiempo de experiencia"
                            value={experienciaTiempo}
                            onChange={e=>setExperienciaTiempo(e.target.value)}
                            isInvalid={errores.experienciaTiempo}
                            required
                        >
                        </Form.Control>

                        <Form.Control.Feedback>
                            {errores.experienciaTiempo}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <div className="d-flex justify-content-center">
                <Button variant="primary" type="submit" className="mt-4">
                    Aplicar oferta
                </Button>
            </div>
        </Form>
    )
}

export {CrearRespuestaFormulario}