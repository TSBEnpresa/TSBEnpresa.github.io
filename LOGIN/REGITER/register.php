<?php
// Conexión a la base de datos
$conexion = mysqli_connect("localhost", "root", "Ander123", "WB_Erabiltzaileak");

// Verificar conexión
if (!$conexion) {
  die("La conexión ha fallado: " . mysqli_connect_error());
}

// Recuperar los datos del formulario de registro
$email = $_POST['email'];
$contraseña = password_hash($_POST['password'], PASSWORD_DEFAULT); // Hashear la contraseña

// Insertar los datos en la base de datos
$query = "INSERT INTO usuarios (email, contraseña) VALUES ('$email', '$contraseña')";
if (mysqli_query($conexion, $query)) {
  // Redirigir al usuario a la página de inicio después de registrar
  header("../index.html");
} else {
  echo "Error al registrar el usuario: " . mysqli_error($conexion);
}

// Cerrar la conexión
mysqli_close($conexion);
?>