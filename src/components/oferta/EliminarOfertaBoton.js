import React from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ELIMINAROFERTA_DELETE_ENDPOINT } from "../../connections/helpers/endpoints"

function EliminarOfertaButton({id, titulo}) {

    const navegar= useNavigate()

    const eliminar = async()=> {

        axios.delete(`${ELIMINAROFERTA_DELETE_ENDPOINT}/${id}`)
        .then(respuesta=> {
            navegar("/")
        })
        .catch(err=> {
            console.error(err);
        })

    }

    const crearAlerta = ()=> {

        const alerta = `Eliminar oferta \n ¿Desea eliminar la oferta ${titulo}?`

        return (window.confirm(alerta) === true) ? eliminar() : ()=>{}
    }

    return (
        <Button
        variant="danger" size="sm" className="text-white"
        onClick={crearAlerta}
        >
            Eliminar
        </Button>
    )
}

export {EliminarOfertaButton}