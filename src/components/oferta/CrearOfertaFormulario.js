import React, {useState} from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function CrearOfertaFormulario({errores, callback,
    oTitulo="", oDescripcion="", oIdArea="", oFechaExpiracion="", oTiempoEstimado="",
    oDescripcionExperiencia="", oTiempoExperiencia="", oCiudad="", oPais="", editable}) {
    
    const [titulo, setTitulo]= useState(oTitulo);
    const [descripcion, setDescripcion]= useState(oDescripcion);
    const [idArea, setIdArea]= useState(oIdArea);
    const [fechaExpiracion, setFechaExpiracion]= useState(oFechaExpiracion);
    const [tiempoEstimado, setTiempoEstimado]= useState(oTiempoEstimado);
    const [descripcionExperiencia, setDescripcionExperiencia]= useState(oDescripcionExperiencia);
    const [tiempoExperiencia, setTiempoExperiencia]= useState(oTiempoExperiencia);
    const [ciudad, setCiudad]= useState(oCiudad);
    const [pais, setPais]= useState(oPais);

    const enviar = (e)=> {
        e.preventDefault();
        (!editable) ? callback({titulo, descripcion, idArea, fechaExpiracion, tiempoEstimado, descripcionExperiencia, tiempoExperiencia}) : callback({ciudad, pais})    
    }

    return (
        <Form onSubmit={enviar}>
            {!editable &&
                <Row>
                    <Col md="6" xs="12">
                        <Form.Group className="mt-3 mb-3" controlId="titulo">
                            <Form.Label className="fw-semibold fs-5">Título</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese el titulo"
                                value={titulo}
                                onChange={e=>setTitulo(e.target.value)}
                                isInvalid={errores.titulo}
                                required
                            >
                            </Form.Control>

                            <Form.Control.Feedback>
                                {errores.titulo}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md="6" xs="12">
                        <Form.Group className="mt-3 mb-3" controlId="descripcion">
                            <Form.Label className="fw-semibold fs-5">Descripción empleo</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese la descripcion del empleo"
                                value={descripcion}
                                onChange={e=>setDescripcion(e.target.value)}
                                isInvalid={errores.descripcion}
                                required
                            >
                            </Form.Control>

                            <Form.Control.Feedback>
                                {errores.descripcion}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
            }
            {!editable &&
                <Row>
                    <Col md="6" xs="12">
                        <Form.Group className="mt-3 mb-3" controlId="idArea">
                        <Form.Label className="fw-semibold fs-5">Área</Form.Label>
                        <Form.Select
                            value={idArea}
                            onChange={e=> setIdArea(e.target.value)}
                            isInvalid={errores.idArea}
                            required
                        >
                            <option value="">Seleccione</option>
                            <option value="1">Salud</option>
                            <option value="2">Tecnología</option>
                            <option value="3">Atención al cliente</option>
                            <option value="4">Financiero</option>
                            <option value="5">Diseño gráfico</option>
                            <option value="6">Administrativo</option>
                            <option value="7">Otro</option>
                        </Form.Select>
        
                        <Form.Control.Feedback type="invalid">
                            {errores.idArea}
                        </Form.Control.Feedback>
                    </Form.Group>                       
                    </Col>

                    <Col md="6" xs="12">
                        <Form.Group className="mt-3 mb-3" controlId="fechaExpiracion">
                            <Form.Label className="fw-semibold fs-5">Fecha de expiración</Form.Label>
                            <DatePicker
                                className="form-control"
                                selected={fechaExpiracion}
                                onChange={date=> setFechaExpiracion(date)}
                                dateFormat="yyyy-MM-dd"
                                required
                            >
                            </DatePicker>
                        </Form.Group>
                    </Col>
                </Row>
            }
            {!editable &&
                <Row>
                    <Col md="6" xs="12">
                        <Form.Group className="mt-3 mb-3" controlId="tiempoEstimado">
                            <Form.Label className="fw-semibold fs-5">Tiempo estimado experiencia</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese el tiempo estimado"
                                value={tiempoEstimado}
                                onChange={e=>setTiempoEstimado(e.target.value)}
                                isInvalid={errores.tiempoEstimado}
                                required
                            >
                            </Form.Control>

                            <Form.Control.Feedback>
                                {errores.tiempoEstimado}
                            </Form.Control.Feedback>
                        </Form.Group>                        
                    </Col>

                    <Col md="6" xs="12">
                        <Form.Group className="mt-3 mb-3" controlId="descripcionExperiencia">
                            <Form.Label className="fw-semibold fs-5">Descripción de experiencia</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese la descripcion de experiencia"
                                value={descripcionExperiencia}
                                onChange={e=>setDescripcionExperiencia(e.target.value)}
                                isInvalid={errores.descripcionExperiencia}
                                required
                            >
                            </Form.Control>

                            <Form.Control.Feedback>
                                {errores.descripcionExperiencia}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
            }
            {!editable &&
                <Row>
                    <Col md="12" xs="12">
                        <Form.Group className="mt-3 mb-3" controlId="tiempoExperiencia">
                            <Form.Label className="fw-semibold fs-5">Tiempo de experiencia</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese el tiempo experinecia requerido"
                                value={tiempoExperiencia}
                                onChange={e=>setTiempoExperiencia(e.target.value)}
                                isInvalid={errores.tiempoExperiencia}
                                required
                            >
                            </Form.Control>

                            <Form.Control.Feedback>
                                {errores.tiempoExperiencia}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
            }
            {editable &&
                <Row>
                    <Col md="6" xs="12">
                        <Form.Group className="mt-3 mb-3" controlId="ciudad">
                            <Form.Label className="fw-semibold fs-5">Ciudad</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese la ciudad"
                                value={ciudad}
                                onChange={e=>setCiudad(e.target.value)}
                                isInvalid={errores.ciudad}
                                required
                            >
                            </Form.Control>

                            <Form.Control.Feedback>
                                {errores.ciudad}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md="6" xs="12">
                        <Form.Group className="mt-3 mb-3" controlId="pais">
                            <Form.Label className="fw-semibold fs-5">País</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese la pais"
                                value={pais}
                                onChange={e=>setPais(e.target.value)}
                                isInvalid={errores.pais}
                                required
                            >
                            </Form.Control>

                            <Form.Control.Feedback>
                                {errores.pais}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
            }
            <div className="d-flex justify-content-center">
                <Button variant="primary" type="submit" className="mt-4">
                    {!editable ? "Crear " : "Editar "}
                    oferta
                </Button>
            </div>
        </Form>
    )
}

export {CrearOfertaFormulario}