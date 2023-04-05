<?php
// Conexión a la base de datos
$conexion = mysqli_connect("localhost", "root", "Ander123", "WB_Erabiltzaileak");

// Verificar conexión
if (!$conexion) {
  die("La conexión ha fallado: " . mysqli_connect_error());
}

// Recuperar los datos del formulario de inicio de sesión
$email = $_POST['email'];
$contraseña = $_POST['password'];

// Verificar si el usuario existe en la base de datos y la contraseña es correcta
$query = "SELECT * FROM usuarios WHERE email = '$email'";
$resultado = mysqli_query($conexion, $query);

if ($fila = mysqli_fetch_assoc($resultado)) {
  if (password_verify($contraseña, $fila['contraseña'])) {
    // Iniciar sesión y redirigir al usuario a la página de inicio después de iniciar sesión
    session_start();
    $_SESSION['email'] = $email;
    header("Location: index.html");
  } else {
    echo "Contraseña incorrecta";
  }
} else {
  echo "Usuario no encontrado";
}

// Cerrar la conexión
mysqli_close($conexion);
?>