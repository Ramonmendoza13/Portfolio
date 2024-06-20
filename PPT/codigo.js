document.addEventListener('DOMContentLoaded', function () {

    const putuacionJ = document.getElementById("victorias");
    const putuacionM = document.getElementById("derrotas");

    const maquina = document.getElementById("maquina");

    let pulsacion = 0;

    let victorias = 0;
    let derrotas = 0;

    // Obtener referencias a los elementos del DOM
    const button = document.getElementById('rock');

    const buttonP = document.getElementById('paper');

    const buttonT = document.getElementById('scissors');
    //Funcion para la tirada de la maquina
    function tiradaMaquina() {
        //aray piedra, papel, tijera
        const array = ["piedra", "papel", "tijera"];
        const numero = Math.floor(Math.random() * 3);
        return array[numero];
    }

    button.addEventListener('click', function () {
        eleciomMaquina = tiradaMaquina();
        if (eleciomMaquina == "tijera") {
            maquina.textContent = `TU GANAS!! Piedra vence a ${eleciomMaquina}`;
            victorias++;
            putuacionJ.textContent = victorias;
        } else if (eleciomMaquina == "papel") {
            maquina.textContent = `TU PIERDES!! ${eleciomMaquina} vence a Piedra`;
            derrotas++;
            putuacionM.textContent = derrotas;
        } else {
            maquina.textContent = `Esto es un EMPATE`;
        }
    });

    buttonP.addEventListener('click', function () {
        eleciomMaquina = tiradaMaquina();
        if (eleciomMaquina == "piedra") {
            maquina.textContent = `TU GANAS!! Papel vence a ${eleciomMaquina}`;
            victorias++;
            putuacionJ.textContent = victorias;
        } else if (eleciomMaquina == "tijera") {
            maquina.textContent = `TU PIERDES!! ${eleciomMaquina} vence a Papel`;
            derrotas++;
            putuacionM.textContent = derrotas;
        } else {
            maquina.textContent = `Esto es un EMPATE`;
        }
    });

    buttonT.addEventListener('click', function () {
        eleciomMaquina = tiradaMaquina();
        if (eleciomMaquina == "papel") {
            maquina.textContent = `TU GANAS!! Tijera vence a ${eleciomMaquina}`;
            victorias++;
            putuacionJ.textContent = victorias;
        } else if (eleciomMaquina == "piedra") {
            maquina.textContent = `TU PIERDES!! ${eleciomMaquina} vence a Tijera`;
            derrotas++;
            putuacionM.textContent = derrotas;
        } else {
            maquina.textContent = `Esto es un EMPATE`
        }
    });
});