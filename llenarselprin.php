<?php
if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) || $_SERVER['REQUEST_METHOD']=="POST"){
  include 'con_bd.php';  //Conectar la bd

  //Instrucción SQL para obtener el campo o columna id_usuario y correo de la tabla Usuarios. El id_usuario nos servirá para mostrar los otros select.
  $leer = "select id_usuario, correo from usuarios order by correo";
  $res_leer = $conecta_system->query($leer); //Ejecutar SQL

  if (!empty($res_leer) && mysqli_num_rows($res_leer)>0) {
    //El resultado de la ejecución SQL contiene datos. Entonces se realiza un ciclo mientras $fila contenga elementos, se debe armar el array de usuarios a devolver a la petición AJAX
    while ($fila = mysqli_fetch_array($res_leer)) {
      $datos[] = [
        "id_usuario"=>$fila['id_usuario'],
        "correo"=>$fila['correo']
      ];
    }

    mysqli_free_result($res_leer); // Liberar memoria de la lectura

    //Variables a devolver a la petición AJAX
    $error = 0;
    $mensaje = "Mostrando datos.";
  } else { //No existen resultados en la búsqueda
    $error = 1;
    $mensaje = "No se pudo conectar a la tabla o no contiene datos.";
    $datos = 0;
  }

  $conecta_system->close();//Cerrar la conexión a la base de datos

  //Armar el array a devolver
  $resp=[
    "error"=>$error,
    "mensaje"=>$mensaje,
    "datos"=>$datos
  ];

  exit (json_encode($resp));//terminar script y devolver el array en formato JSON

} else {
  echo "DENEGADO";
}
?>
