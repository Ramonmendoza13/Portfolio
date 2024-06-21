let victorias = 0;
let derrotas = 0;

const putuacionJ = document.getElementById("victorias");
const putuacionM = document.getElementById("derrotas");
const resultado = document.getElementById("resultado");


const buttons = document.querySelectorAll('.button-container input[type="button"]');

// Obtener referencias a los elementos del DOM
const buttonReiniciar = document.getElementById('reiniciar');

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

buttonReiniciar.addEventListener('click', reiniciarPartida);
