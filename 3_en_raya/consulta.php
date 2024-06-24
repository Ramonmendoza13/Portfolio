<?php
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

// Consulta SQL para obtener las puntuaciones
$sql = "SELECT nombre, max_victorias FROM usuarios ORDER BY max_victorias DESC limit 10";
$result = mysqli_query($enlace, $sql);

// Verificar si hay resultados y generarlos dinámicamente
if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        echo "<li>" . htmlspecialchars($row["nombre"]) . ": " . htmlspecialchars($row["max_victorias"]) . " victorias</li>";
    }
} else {
    echo "<li>No hay registros disponibles</li>";
}

// Cerrar la conexión
mysqli_close($enlace);
?>
