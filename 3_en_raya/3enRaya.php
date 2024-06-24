<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
    <title>Tres en Raya</title>
    <link rel="icon" type="image/png" href="logo.png">

</head>

<body>
    <header>
        <h1>TRES EN RAYA</h1>
    </header>

    <main>
        <div class="main-layout">
            <aside class="rules">
                <h2>Reglas del Tres en Raya</h2>
                <ul>
                    <li>El juego se juega en una cuadrícula de 3x3.</li>
                    <li>El primer jugador es X y el segundo es O.</li>
                    <li>Los jugadores se turnan para poner sus marcas en las celdas vacías.</li>
                    <li>El primer jugador que consiga tres de sus marcas en una fila horizontal, vertical o diagonal gana.</li>
                    <li>Si todas las celdas están llenas y ningún jugador tiene tres en raya, el juego es un empate.</li>
                </ul>
            </aside>

            <div class="container">
                <div class="puntuacion">
                    <p>Tu puntuacion: <span id="victorias">0</span></p>
                    <input type="button" id="reiniciar" value="REINICIAR">
                    <input type="button" id="acabar" value="ACABAR">
                    <p>Puntuacion maquina: <span id="derrotas">0</span></p>
                </div>
                <p id="resultado"></p>

                <div class="button-container">
                    <input type="button" value="">
                    <input type="button" value="">
                    <input type="button" value="">
                    <input type="button" value="">
                    <input type="button" value="">
                    <input type="button" value="">
                    <input type="button" value="">
                    <input type="button" value="">
                    <input type="button" value="">
                </div>
            </div>

            <aside class="record">
                <h2>Tabla de Puntuación Record</h2>
                <ol>
                    <?php include 'consulta.php'; ?>
                </ol>
            </aside>
        </div>
    </main>

    <script src="codigo.js"></script>
</body>

</html>
