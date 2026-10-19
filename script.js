
const SENHA_CORRETA = "ANA LIVIA E uma bebezinha";

// Data final: 31 de outubro de 2026, à meia-noite.
// O fuso -04:00 corresponde ao horário de Cuiabá.
const DATA_FINAL = new Date("2026-10-31T00:00:00-04:00").getTime();

const form = document.getElementById("passwordForm");
const passwordInput = document.getElementById("password");
const message = document.getElementById("message");
const success = document.getElementById("success");
const unlockButton = document.getElementById("unlockButton");

function atualizarContador() {
    const agora = Date.now();
    const diferenca = DATA_FINAL - agora;

    if (diferenca <= 0) {
        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        document.querySelector(".countdown-title").textContent =
            "CHEGOU O NOSSO DIA! ❤️";

        return;
    }

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor(
        (diferenca / (1000 * 60 * 60)) % 24
    );
    const minutos = Math.floor(
        (diferenca / (1000 * 60)) % 60
    );
    const segundos = Math.floor(
        (diferenca / 1000) % 60
    );

    document.getElementById("days").textContent =
        String(dias).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(horas).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutos).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(segundos).padStart(2, "0");
}

atualizarContador();
setInterval(atualizarContador, 1000);

form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (passwordInput.value === SENHA_CORRETA) {
        message.textContent = "Senha correta! ❤️";
        message.style.color = "#26834a";

        success.hidden = false;
        passwordInput.hidden = true;
        unlockButton.hidden = true;
        document.querySelector("label").hidden = true;

    } else {
        message.textContent =
            "Ops, essa não é a senha, meu amor! Tente novamente. 💕";

        message.style.color = "#c0395c";

        passwordInput.value = "";
        passwordInput.focus();
    }
});
