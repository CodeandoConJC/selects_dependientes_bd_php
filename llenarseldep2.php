<?php
if ( !empty($_SERVER['HTTP_X_REQUESTED_WITH']) || $_SERVER['REQUEST_METHOD']=="POST"){

  include 'con_bd.php';//Conectar la bd

  //Obtener el Id seleccionado por POST que nos envía el AJAX
  $id_buscar = mysqli_real_escape_string($conecta_system, $_POST['texto_seleccion']);

  //Instrucción SQL para obtener el campo o columna id_usuario e identificador de la tabla coordenadas.
  $leer = "select id_usuario, latitud, longitud from coordenadas where identificador='$id_buscar' order by identificador";
  $res_leer = $conecta_system->query($leer); //Ejecutar SQL

  if (!empty($res_leer) && mysqli_num_rows($res_leer)>0) {
    //La ejecución SQL devolvió datos. Entonces armar el array de usuarios a devolver a la petición AJAX
    while ($fila = mysqli_fetch_array($res_leer)) {
      $datos[] = [
        "id"=>$fila['id_usuario'],
        "latitud"=>$fila['latitud'],
        "longitud"=>$fila['longitud']
      ];
    }

    mysqli_free_result($res_leer); // Liberar memoria de la lectura

    //Variables a devolver a la petición AJAX
    $error = 0;
    $mensaje = "Mostrando datos.";

  } else { //No contiene datos la ejecución SQL
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

  exit (json_encode($resp)); //Terminar script y devolver array en formato JSON

} else {
  echo "DENEGADO";
}
?>
