<?php
if ( !empty($_SERVER['HTTP_X_REQUESTED_WITH']) || $_SERVER['REQUEST_METHOD']=="POST"){
  //Conectar la bd
  include 'con_bd.php';

  //Obtener el Id seleccionado por POST que nos envía el cliente
  $id_buscar = mysqli_real_escape_string($conecta_system, $_POST['id_seleccion']);


  //Instrucción SQL para obtener el campo o columna id_usuario e identificador de la tabla coordenadas.
  $leer = "select id_usuario, identificador from coordenadas where id_usuario=$id_buscar order by identificador";
  $res_leer = $conecta_system->query($leer); //Ejecutar SQL

  if (!empty($res_leer) && mysqli_num_rows($res_leer)>0) {
    //La instrucción SQL devolvió resultados, entonces armar el array de usuarios a devolver a la petición AJAX
    while ($fila = mysqli_fetch_array($res_leer)) {
      $datos[] = [
        "id_usuario"=>$fila['id_usuario'],
        "identificador"=>$fila['identificador']
      ];
    }

    mysqli_free_result($res_leer); // Liberar memoria de la lectura

    //Variables a devolver a la petición AJAX
    $error = 0;
    $mensaje = "Mostrando datos.";
  } else {
    //No existen resultados en la búsqueda
    $error = 1;
    $mensaje = "No se pudo conectar a la tabla o no contiene datos.";
    $datos = 0;
  }

  $conecta_system->close(); //Cerrar la conexión a la base de datos

  //Armar el array a devolver
  $resp=[
    "error"=>$error,
    "mensaje"=>$mensaje,
    "datos"=>$datos
  ];

  //Devolver el array en formato JSON al cliente
  exit (json_encode($resp));

} else {
  //Mostrar este mensaje si se solicita el archivo desde el navegador
  echo "DENEGADO";
}
?>
