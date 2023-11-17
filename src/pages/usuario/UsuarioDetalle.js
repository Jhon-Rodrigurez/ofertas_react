import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { USUARIODETALLE_GET_ENDPOINT } from "../../connections/helpers/endpoints";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UsuarioDetalle = () => {
  const [usuarios, setUsuarios] = useState(null);
  const [archivoBinario, setArchivoBinario] = useState(null); // Aquí almacenaremos el archivo binario
  const { id } = useParams();
  const navegar = useNavigate();

  useEffect(() => {
    axios
      .get(`${USUARIODETALLE_GET_ENDPOINT}/${id}`)
      .then((respuesta) => {
        setUsuarios(respuesta.data);
        setArchivoBinario(respuesta.data.urlCv);

        let base64Logo = btoa(
          new Uint8Array(respuesta.data.urlLogo.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ''
          )
        );
        // Establecer la URL de la imagen como una cadena base64
        setArchivoBinario(`data:${respuesta.data.urlLogo.contentType};base64,${base64Logo}`);
      })
      .catch((err) => {
        navegar(-1);
      });
  }, [id, navegar]);
  

  const descargarArchivo = () => {
    // Crea un Blob a partir del archivo binario
    const blob = new Blob([archivoBinario], { type: "application/pdf" });

    // Crea una URL para el Blob y descarga el archivo PDF
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Hoja de vida de ${usuarios.nombre}.pdf`;
    link.click();

    // Limpia la URL creada
    window.URL.revokeObjectURL(url);
};

  return (
    <Container className="mt-5 mb-5">
      <Row className="justify-content-md-center">
        <Col sm="12" md="8" lg="6">
          <h3 className="text-center fw-bold mt-5 mb-5 fs-3 text-uppercase">
            Detalle de descripción de usuario
          </h3>
          {usuarios && (
            <Card>
              <Card.Body>
              <Card.Img variant="top" src={usuarios.urlLogo} />
                <Card.Title className="fs-2 text-center mb-4">{usuarios.nombre}</Card.Title>
                <Card.Text>Correo electrónico: {usuarios.email}</Card.Text>
                <Card.Text>Celular: {usuarios.celular}</Card.Text>
                <Card.Text>Linkedin: {usuarios.urlLinkedin}</Card.Text>
                <Card.Text>Descripción de experiencia laboral: {usuarios.descripcionExperiencia}</Card.Text>
                <Card.Subtitle>
                  
                  <Button onClick={descargarArchivo}>
                    Descargar Hoja de vida
                    <FontAwesomeIcon icon="download" className="mx-3 fs-4"/>
                  </Button>
                </Card.Subtitle>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export { UsuarioDetalle };