import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { SIGNUP_POST_ENDPOINT } from '../../connections/helpers/endpoints';
import { Alert, Card, Col, Container, Row } from "react-bootstrap";
import { SignupFormulario } from '../../components/usuario/SignupFormulario';

const Signup = ()=> {

    const [errores, setErrores] = useState({});
    const navegar = useNavigate();

    const registro = async({nombre, email, idArea, idRol, password}) => {

        const error={};
        setErrores(error);

        axios.post(SIGNUP_POST_ENDPOINT, {nombre, email, idArea, idRol, password},
            {headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'}}
            ).then(response=> {
                console.log(response);
                navegar("/signin");
            }).catch(err=> {
                setErrores({ crear: err.response.data.message })
            })
    }

    return (
        <Container>
            <Row className="justify-content-md-center mt-5 mb-4">
                <Col sm="12" md="8" lg="6">
                    <div className="py-2"></div>
                    <h3 className="text-center mt-5 fw-bold fs-3 text-uppercase">Registro usuario</h3>
                    <Card.Body className='mt-4'>
                        {errores.crear && <Alert variant="danger">{errores.crear}</Alert>}
                        <SignupFormulario errores={errores} callback={registro}></SignupFormulario>
                        <div className="mt-4 text-center">
                            <Link to={'/signin'} className="text-center">¿Ya tienes una cuenta? Iniciar sesión aquí</Link>
                        </div>
                    </Card.Body>
                </Col>
            </Row>
        </Container>
    )
}

export {Signup}