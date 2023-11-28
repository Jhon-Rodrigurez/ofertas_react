const API_URL = "http://localhost:8080";

export const SIGNUP_POST_ENDPOINT= API_URL+"/usuario";
export const SIGNIN_POST_ENDPOINT= API_URL+"/usuario/login";
export const USUARIODETALLE_GET_ENDPOINT= API_URL+"/usuario";
export const ACTUALIZARDESCRIPCIONUSUARIO_PUT_ENDPOINT= API_URL+"/usuario";
export const MIDESCRIPCION_GET_ENDPOINT= API_URL+"/midescripcion";
export const MISOFERTAS_GET_ENDPOINT= API_URL+"/misofertas";
export const MISRESPUESTASOFERTAS_GET_ENDPOINT= API_URL+"/misrespuestas";
export const CREAROFERTA_POST_ENDPOINT= API_URL+"/oferta";
export const OFERTASCREADAS_GET_ENDPOINT= API_URL+"/oferta";
export const OFERTADETALLE_GET_ENDPOINT= API_URL+"/oferta";
export const ACTUALIZAROFERTA_PUT_ENDPOINT= API_URL+"/oferta";
export const ELIMINAROFERTA_DELETE_ENDPOINT= API_URL+"/oferta";
export const APLICAROFERTA_POST_ENDPOINT= API_URL+"/respuesta";