import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom';

const RespuestaCard = ({respuesta})=> {

    const fecha = new Date(respuesta.fechaAplicado);

    const ano = fecha.getFullYear();
    const mes = String(fecha.getMonth() + 1).padStart(2, '0');
    const dia = String(fecha.getDate()).padStart(2, '0');

    const fechaFormateada = `${ano}-${mes}-${dia}`;

    return (
        <Card className="tarjeta mt-4 mb-4">
            <Card.Body>
                <Card.Text>
                    <Link className="d-flex justify-content-center fs-4 mb-4" to={`/usuario/${respuesta.idUsuario}`}>
                        {respuesta.nombre}
                    </Link>
                </Card.Text>
                <Card.Text>
                    Correo: {respuesta.email}
                </Card.Text>
                <Card.Text>
                    Celular: {respuesta.celular}
                </Card.Text>
                <Card.Text>
                    Aplicó para {respuesta.titulo}
                </Card.Text>
                <Card.Text>
                    Descripcion de experiencia de la persona: {respuesta.experienciaDescripcion}
                </Card.Text>
                <Card.Text>
                    Tiempo de experiencia en el cargo: {respuesta.experienciaTiempo}
                </Card.Text>
                <Card.Text>
                    Aplicó en el día: {fechaFormateada}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export {RespuestaCard}