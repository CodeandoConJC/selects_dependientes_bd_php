window.addEventListener('DOMContentLoaded', (event) => {
  //Se carga el select Principal al terminar de cargar toda la página
  cargar_select_principal()
});

function cargar_select_principal(){
  //Genera una solicitud dependiendo del navegador del usuario
  var solicitud = generar_solicitud();
  var resp_server = false; //respuesta recibida del servidor
  var msg_error = ""; //Algún mensaje de error a mostrar

  //solicitud. Se verifica el estatus.
  solicitud.onreadystatechange = function(){
    if (solicitud.readyState == 4) { //4 = Operación completada
      if (solicitud.status == 200) { //200= Respuesta ok del servidor
        if (solicitud.responseText != null && solicitud.responseText != undefined) { // Verificar que el response no sea nulo
          try {
            //Parsear a JSON la resp del servidor
            resp_server = JSON.parse(solicitud.responseText)

            if (resp_server.datos != null && resp_server.datos != 0) {
              //Obtener el array de datos y mandarlo a la función para que se coloquen las opciones
              llenar_select_principal(resp_server.datos);

            } else {
              //La tabla no contiene datos, informar al usuario
              msg_error = "La tabla no contiene datos.";
            }
          } catch (e) {
            msg_error = "Error al interpretar la respuesta del servidor: " + e;
          }
        }
      } else {
        //Notificar al usuario
        msg_error = e_status(solicitud.status);
      }
    } else {
      msg_error = e_onreadystate(solicitud.onreadystatechange);
    }

    document.getElementById('error_servidor').innerHTML = msg_error;
  }

  //Mandar la solicitud
  solicitud.open("POST", "llenarselprin.php");
  solicitud.send();
}

function llenar_select_principal(array_datos){
  //Select donde colocar los options
  const cmb_prin = document.getElementById('cmb_prin');

  //Validar que contenga datos el array. También se puede validar con length > 0
  if (array_datos != null && array_datos != 0) {
    array_datos.forEach((fila, consecutivo) => {
      const option = document.createElement('option');
      option.value = fila.id_usuario;
      option.text = fila.correo;
      cmb_prin.appendChild(option);
    });
  } else {
    document.getElementById('error_servidor').innerHTML = "El servidor devolvió un array vacío o nulo.";
  }
}

function obtener_select_dep1(){
  //Genera una solicitud dependiendo del navegador del usuarios
  var solicitud = generar_solicitud();
  var resp_server = false; //respuesta recibida del servidor
  var msg_error = ""; //Algún mensaje de error a mostrar
  //Obtener el ID del elemento seleccionado
  var id_seleccion = document.getElementById('cmb_prin').value;
  var datos = new FormData();

  //Agregar el id que vamos a buscar en la tabla
  datos.append("id_seleccion", id_seleccion);

  //solicitud. Se verifica el estatus.
  solicitud.onreadystatechange = function(){
    if (solicitud.readyState == 4) {
      if (solicitud.status == 200) { // respuesta ok del servidor
        if (solicitud.responseText != null && solicitud.responseText != undefined) {
          try {
            //Parsear la resp del servidor
            resp_server = JSON.parse(solicitud.responseText)

            if (resp_server.datos != null && resp_server.datos != 0) {
              //Obtener el array de datos y mandarlo a la función para que se coloquen las opciones
              llenar_select_dep1(resp_server.datos);

            } else {
              //La tabla no contiene datos, informar al usuario
              msg_error = "La tabla no contiene datos.";
            }
          } catch (e) {
            msg_error = "Error al interpretar la respuesta del servidor: " + e;
          }
        }
      } else {
        //Notificar al usuario
        msg_error = e_status(solicitud.status);
      }
    } else {
      msg_error = e_onreadystate(solicitud.onreadystatechange);
    }

    document.getElementById('error_servidor').innerHTML = msg_error;
  }

  //Mandar la solicitud
  solicitud.open("POST", "llenarseldep1.php");
  solicitud.send(datos);
}

function llenar_select_dep1(array_datos){
  //Select donde colocar los options
  const cmb_dep1 = document.getElementById('cmb_dep1');

  cmb_dep1.innerHTML = "<option value='0'>Seleccione</option>";
  //Validar que contenga datos el array. También se puede validar con length > 0
  if (array_datos != null && array_datos != 0) {
    array_datos.forEach((fila, consecutivo) => {
      const option = document.createElement('option');
      option.value = fila.id_usuario;
      option.text = fila.identificador;
      cmb_dep1.appendChild(option);
    });
  } else {
    document.getElementById('error_servidor').innerHTML = "El servidor devolvió un array vacío o nulo.";
  }
}

function obtener_select_dep2(){
  //Genera una solicitud dependiendo del navegador del usuarios
  var solicitud = generar_solicitud();
  var resp_server = false; //respuesta recibida del servidor
  var msg_error = ""; //Algún mensaje de error a mostrar
  //Obtener el ID del elemento seleccionado
  var texto_seleccion = document.getElementById("cmb_dep1").options[document.getElementById("cmb_dep1").selectedIndex].innerText;
  var datos = new FormData();

  //Agregar el id que vamos a buscar en la tabla
  datos.append("texto_seleccion", texto_seleccion);

  //solicitud. Se verifica el estatus.
  solicitud.onreadystatechange = function(){
    if (solicitud.readyState == 4) {
      if (solicitud.status == 200) { // respuesta ok del servidor
        if (solicitud.responseText != null && solicitud.responseText != undefined) {
          try {
            //Parsear la resp del servidor
            resp_server = JSON.parse(solicitud.responseText)

            if (resp_server.datos != null && resp_server.datos != 0) {
              //Obtener el array de datos y mandarlo a la función para que se coloquen las opciones
              llenar_select_dep2(resp_server.datos);

            } else {
              //La tabla no contiene datos, informar al usuario
              msg_error = "La tabla no contiene datos.";
            }
          } catch (e) {
            msg_error = "Error al interpretar la respuesta del servidor: " + e;
          }
        }
      } else {
        //Notificar al usuario
        msg_error = e_status(solicitud.status);
      }
    } else {
      msg_error = e_onreadystate(solicitud.onreadystatechange);
    }

    document.getElementById('error_servidor').innerHTML = msg_error;
  }

  //Mandar la solicitud
  solicitud.open("POST", "llenarseldep2.php");
  solicitud.send(datos);
}

function llenar_select_dep2(array_datos){
  //Select donde colocar los options
  const cmb_dep2 = document.getElementById('cmb_dep2');

  //Limpiar el select dependiente 2
  cmb_dep2.innerHTML = "<option value='0'>Seleccione</option>";

  //Validar que contenga datos el array. También se puede validar con length > 0
  if (array_datos != null && array_datos != 0) {
    array_datos.forEach((fila, consecutivo) => {
      const option = document.createElement('option');
      option.value = fila.id_usuario;
      option.text = "LAT = " + fila.latitud + " LONG = "+ fila.longitud;
      cmb_dep2.appendChild(option);
    });
  } else {
    document.getElementById('error_servidor').innerHTML = "El servidor devolvió un array vacío o nulo.";
  }
}

function mensaje_final(){
  document.getElementById('error_servidor').innerHTML = "Último select seleccionado. Contenido: " + document.getElementById("cmb_dep2").options[document.getElementById("cmb_dep2").selectedIndex].innerText;;
}

function recargar_select_principal(){
  //Limpiar los selects
  document.getElementById('cmb_prin').innerHTML = "<option value='0'>Seleccione</option>";
  document.getElementById('cmb_dep1').innerHTML = "<option value='0'>Seleccione</option>";
  document.getElementById('cmb_dep2').innerHTML = "<option value='0'>Seleccione</option>";

  //Limpiar div de mensajes de error
  document.getElementById('error_servidor').innerHTML = "";

  //Cargar nuevamente la información del Principal
  cargar_select_principal();
}
