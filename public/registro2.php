<?php

$host = "localhost";
$username = "root";
$password = "";
$database = "mynewdb"; 
$mysqli = new mysqli($host, $username, $password, $database);

if ($mysqli->connect_error) {
    die("La conexión a la base de datos falló: " . $mysqli->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Obtener datos del formulario
    $nombreUsuario = $_POST["nombreUsuario"];
    $email = $_POST["email"];
    $password = $_POST["password"];

    // Insertar usuario en la base de datos
    $sql = "INSERT INTO usuarios (nombreUsuario, email, password) VALUES (?, ?, ?)";
    $stmt = $mysqli->prepare($sql);
    $stmt->bind_param("sss", $nombreUsuario, $email, $password);

    if ($stmt->execute()) {
     
        echo "Registro exitoso. Redireccionando...";
        
        header("Location: login.php"); 
        exit();
    } else {
        // Error en el registro
        echo "Error al registrar el usuario: " . $stmt->error;
    }

    // Cerrar la conexión
    $stmt->close();
}

// Cerrar la conexión a la base de datos
$mysqli->close();
?>
