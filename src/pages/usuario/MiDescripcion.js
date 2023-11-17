import { useState, useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import { UsuarioCard } from "../../components/usuario/UsuarioCard";
import { MIDESCRIPCION_GET_ENDPOINT } from "../../connections/helpers/endpoints";

function MiDescripcion() {

    const [usuarios, setUsuarios]= useState([]);
    const [buscando, setBuscando]= useState(false);

    useEffect(() => {
        axios.get(MIDESCRIPCION_GET_ENDPOINT)
        .then(respuesta => {
            if (Array.isArray(respuesta.data)) {
                setUsuarios(respuesta.data);
            }
            setBuscando(false);
        }).catch(e => {
            console.error(e);
            setBuscando(false);
        });
    }, []);

    return (
        <Container className="mt-5 mb-3">
            <Row className="justify-content-md-center">
                <Col sm="12" md="8" lg="6">
                    <h3 className="text-center mt-5 fw-bold text-uppercase">Mi Descripción</h3>
                    <Card.Body className="mt-4 text-center">
                        {buscando ? "Cargando..." : (usuarios.length === 0 && "No se encontró tu descripción.")}
                        {usuarios.map(usuario => <UsuarioCard key={usuario.idUsuario} usuario={usuario} editable={true} />)}
                    </Card.Body>
                </Col>
            </Row>
        </Container>              
    )
}

export {MiDescripcion}