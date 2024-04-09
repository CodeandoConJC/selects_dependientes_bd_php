<?php
$host_db = "localhost";
$user_db = "root";
$pass_db = "tu_password";
$db_name = "ejemplos_kotlin";

$conecta_system = new mysqli($host_db, $user_db, $pass_db, $db_name);
mysqli_query($conecta_system,"SET NAMES 'utf8'");

?>
