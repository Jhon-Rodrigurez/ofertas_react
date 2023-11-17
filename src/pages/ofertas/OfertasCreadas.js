import { Container, Row, Col, Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { OFERTASCREADAS_GET_ENDPOINT } from '../../connections/helpers/endpoints';
import { OfertaCard } from '../../components/oferta/OfertaCard';
import noFound from '../../assets/image/no encontrado.jpg';

const OfertasCreadas= ()=> {

    const [ofertas, setOfertas] = useState([]);
    const [buscando, setBuscando] = useState(true);

    useEffect(()=> {
        axios.get(OFERTASCREADAS_GET_ENDPOINT)
        .then(respuesta=> {
            setOfertas(respuesta.data);
            setBuscando(false);
        }).catch(err=> {
            console.error(err);
            setBuscando(false);
        })
    }, []);

    return (
        <Container>
            <Row className="justify-content-center mt-5 mb-4">
                <Col sm="12" md="8" lg="6">  
                    <h3 className="text-center mt-5 fw-bold fs-3 text-uppercase">Ofertas creadas</h3>
                    <Card.Body className='mt-5 text-center'>
                        {buscando ? "Buscando..." : (ofertas.length ===0 && <img className='mt-5' src={noFound} alt=''/>)}
                        {ofertas.map(oferta => <OfertaCard key={oferta.idOferta} oferta={oferta} editable={false}/>)}
                    </Card.Body>
                </Col>
            </Row>
        </Container>
    )
}

export {OfertasCreadas}