import { useState } from "react";
import { Button, Form } from "react-bootstrap";

function SigninFormulario({errores, callback}) {

    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");

    const enviarFormulario = (e) => {
        e.preventDefault();
        callback({email, password});
    }

    return (
        <Form onSubmit={enviarFormulario}>
            <Form.Group className="my-3" controlId="email">
                <Form.Control
                type="text"
                placeholder="Correo electrónico"
                value={email}
                onChange={e=> setEmail(e.target.value)}
                isInvalid={errores.email}
                >
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                    {errores.email}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="my-3 mt-4" controlId="password">
                <Form.Control
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={e=> setPassword(e.target.value)}
                isInvalid={errores.password}
                >
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                    {errores.password}
                </Form.Control.Feedback>
            </Form.Group>

            <div className="d-flex justify-content-center">
                <Button type="submit" variant="danger" className="mt-4">
                    Iniciar sesión
                </Button>
            </div>
        </Form>
    )
}

export {SigninFormulario}