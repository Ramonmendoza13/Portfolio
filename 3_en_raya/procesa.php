<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = isset($_POST['nombre']) ? $_POST['nombre'] : '';
    $numero = isset($_POST['numero']) ? $_POST['numero'] : '';

    // Datos de conexión
    $servername = "roundhouse.proxy.rlwy.net";
    $username = "root";
    $password = "ccYTjbxMMIqKraGNOSooeIzCsOhCtKDB";
    $dbname = "railway";
    $port = 59391;

    // Crear conexión
    $enlace = mysqli_connect($servername, $username, $password, $dbname, $port);

    // Verificar la conexión
    if (!$enlace) {
        die("Error al conectarse: " . mysqli_connect_error());
    }

    // Escapar caracteres especiales en el nombre para prevenir inyección SQL
    $nombre = mysqli_real_escape_string($enlace, $nombre);
    $numero = mysqli_real_escape_string($enlace, $numero);

    // Insertar el nombre y el número en la tabla
    $consulta = "INSERT INTO usuarios (nombre, max_victorias) VALUES ('$nombre', '$numero')";

    if (mysqli_query($enlace, $consulta)) {
        // Datos guardados exitosamente, mostrar mensaje con estilos CSS
        echo '
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Juego Tres en Raya</title>
            <link rel="stylesheet" href="styles.css">
        </head>
        <body>
            <div class="mensaje">
                <p style="color: white;">Datos guardados exitosamente.</p>
                <a  href="3enRaya.php"">Volver al juego</a>
            </div>
        </body>
        </html>
        ';
    } else {
        // Error al guardar los datos, mostrar mensaje con estilos CSS
        echo '
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Juego Tres en Raya</title>
            <link rel="stylesheet" href="styles.css">
        </head>
        <body>
            <div class="mensaje">
                <p style="color: white;>Error al guardar los datos: ' . mysqli_error($enlace) . '</p>
                <a href="3enRaya.php">Volver al juego</a>
            </div>
        </body>
        </html>
        ';
    }

    // Cerrar la conexión
    mysqli_close($enlace);
}
?>
