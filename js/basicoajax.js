//Librería para conocer los errores que pudieran suceder al procesar petición AJAX. Más info en https://developer.mozilla.org/es/docs/Web/API/XMLHttpRequest

//Detectar navegador y generar solicitud estandar XMLHttpRequest
function generar_solicitud(){
  var solicitud = false;

  if(window.XMLHttpRequest){
    return solicitud = new XMLHttpRequest;
  } else if (window.ActiveXObject) {
    return solicitud = new ActiveXObject("Microsoft.XMLHTTP");
  }
}

//Mandar un error en texto de Status de conexión
function e_status(valor){
  var msg_error = "";

  switch (valor) {
    case 200:
      msg_error = "<br>La respuesta del servidor fue favorable. Mostrando Información.";
      break;

    case 404:
      msg_error = "<br>La respuesta del servidor no fue favorable. Error " + valor + ". Archivo de procesamiento en el servidor no encontrado." ;
      break;

    case 500:
      msg_error = "<br>La respuesta del servidor no fue favorable. Error " + valor + ". Error interno del servidor." ;
      break;
    default:
      msg_error = "<br>Ocurrió un error inesperado. ";
      break
  }
  return msg_error;
}

function e_onreadystate(codigo){
  var msg_error = "";
  switch (codigo) {
    case 0:
    msg_error = "No se ha realizado la conexión con el servidor.";
    break;

    case 1:
    msg_error = "Conexión realizada con el servidor, pero aún no se ha enviado la solicitud por parte el cliente.";
    break;

    case 2:
    msg_error = "Se envió la petición al servidor, esperando respuesta.";
    break;

    case 3:
    msg_error = "Aún se esta en espera de la respuesta del servidor para procesar los datos.";
    break;

    case 4:
    msg_error = "Completado. Esperando procesar la Información";
    break;

    default:
      // msg_error = "Ocurrió un error inesperado.";
    break;

  }

  return msg_error;
}

//Verificar si el navegador admite almacenamiento Storage
function verificar_storage(alm_verificar){
  var almacenamiento = window[alm_verificar];
  try {
    almacenamiento.setItem("Consx", 'ConsultorioX');
    almacenamiento.removeItem("Consx");
    return true;
  } catch (e) {
    return e instanceof DOMException && (
      // everything except Firefox
      e.code === 22 ||
      // Firefox
      e.code === 1014 ||
      // test name field too, because code might not be present
      // everything except Firefox
      e.name === 'QuotaExceededError' ||
      // Firefox
      e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      // acknowledge QuotaExceededError only if there's something already stored
      (almacenamiento && almacenamiento.length !== 0);
  }
}
