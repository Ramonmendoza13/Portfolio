let victorias = 0;
let derrotas = 0;

const putuacionJ = document.getElementById("victorias");
const putuacionM = document.getElementById("derrotas");
const resultado = document.getElementById("resultado");

const buttons = document.querySelectorAll('.button-container input[type="button"]');
const buttonReiniciar = document.getElementById('reiniciar');
const buttonAcabar = document.getElementById('acabar');

// Función para pedir nombre al inicio
const nombre = prompt("Introduce tu nombre:");

function verificarGanador() {
    if ((buttons[0].value === buttons[1].value && buttons[0].value === buttons[2].value && buttons[0].value === "X") ||
        (buttons[3].value === buttons[4].value && buttons[3].value === buttons[5].value && buttons[3].value === "X") ||
        (buttons[6].value === buttons[7].value && buttons[6].value === buttons[8].value && buttons[6].value === "X") ||
        (buttons[0].value === buttons[3].value && buttons[0].value === buttons[6].value && buttons[0].value === "X") ||
        (buttons[1].value === buttons[4].value && buttons[1].value === buttons[7].value && buttons[1].value === "X") ||
        (buttons[0].value === buttons[4].value && buttons[0].value === buttons[8].value && buttons[0].value === "X") ||
        (buttons[2].value === buttons[4].value && buttons[2].value === buttons[6].value && buttons[2].value === "X") ||
        (buttons[2].value === buttons[5].value && buttons[2].value === buttons[8].value && buttons[2].value === "X")) {
        resultado.textContent = `TU GANAS!!`;

        victorias++;
        putuacionJ.textContent = victorias;
        setTimeout(reiniciarPartida, 1500); // reinicia después de 1.5 segundos
    } else if ((buttons[0].value === buttons[1].value && buttons[0].value === buttons[2].value && buttons[0].value === "0") ||
        (buttons[3].value === buttons[4].value && buttons[3].value === buttons[5].value && buttons[3].value === "0") ||
        (buttons[6].value === buttons[7].value && buttons[6].value === buttons[8].value && buttons[6].value === "0") ||
        (buttons[0].value === buttons[3].value && buttons[0].value === buttons[6].value && buttons[0].value === "0") ||
        (buttons[1].value === buttons[4].value && buttons[1].value === buttons[7].value && buttons[1].value === "0") ||
        (buttons[0].value === buttons[4].value && buttons[0].value === buttons[8].value && buttons[0].value === "0") ||
        (buttons[2].value === buttons[4].value && buttons[2].value === buttons[6].value && buttons[2].value === "0") ||
        (buttons[2].value === buttons[5].value && buttons[2].value === buttons[8].value && buttons[2].value === "0")) {
        resultado.textContent = `HAZ PERDIDO!!`;
        derrotas++;
        putuacionM.textContent = derrotas;
        setTimeout(reiniciarPartida, 1500); // reinicia después de 1.5 segundos
    } else if ((buttons[0].value != "" && buttons[1].value != "" && buttons[2].value != "" && buttons[3].value != "" &&
        buttons[4].value != "" && buttons[5].value != "" && buttons[6].value != "" && buttons[7].value != "" && buttons[8].value != ""
    )) {
        resultado.textContent = `EMPATE`;
        setTimeout(reiniciarPartida, 1500); // reinicia después de 1.5 segundos
    }
}

// Función para enviar los datos al servidor
function enviarDatos() {
    if (nombre && victorias) {
        var form = document.createElement("form");
        form.method = "POST";
        form.action = "procesa.php"; // Archivo PHP donde se procesará el formulario

        var inputNombre = document.createElement("input");
        inputNombre.type = "hidden";
        inputNombre.name = "nombre";
        inputNombre.value = nombre;

        var inputNumero = document.createElement("input");
        inputNumero.type = "hidden";
        inputNumero.name = "numero";
        inputNumero.value = victorias;

        form.appendChild(inputNombre);
        form.appendChild(inputNumero);
        document.body.appendChild(form);
        form.submit();
    }
}

function movimientoMaquina() {
    let emptyButtons = [];
    // Filtra los botones que aún no tienen valor
    buttons.forEach(button => {
        if (button.value === '') {
            emptyButtons.push(button);
        }
    });

    if (emptyButtons.length > 0) {
        // Genera un índice aleatorio de los botones vacíos
        const randomIndex = Math.floor(Math.random() * emptyButtons.length);
        // Cambia el valor del botón aleatorio vacío a '0'
        emptyButtons[randomIndex].value = '0';
    }
}

buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        if (button.value === '') {
            button.value = 'X';
            movimientoMaquina();
            verificarGanador();
        }
    });
});

// Función para reiniciar la partida
function reiniciarPartida() {
    buttons.forEach(function (button) {
        button.value = '';
    });
    resultado.textContent = ``;
}

buttonReiniciar.addEventListener('click', function () {
    reiniciarPartida(); // Reinicia el juego
});

// Asignar evento al botón de acabar partida
buttonAcabar.addEventListener('click', function () {
    alert("Partida acabada. Has conseguido " + victorias + " victorias.");
    enviarDatos(); // Llama a la función para enviar los datos al servidor
    victorias = 0; // Reinicia las victorias
    derrotas = 0; // Reinicia las derrotas
    putuacionJ.textContent = victorias;
    putuacionM.textContent = derrotas;
    reiniciarPartida(); // Reinicia el juego
});
