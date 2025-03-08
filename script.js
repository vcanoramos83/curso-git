// Obtener la hora actual
const fecha = new Date();
const horas = fecha.getHours();
let mensajeBienvenida;

// Determinar el mensaje según la hora
if (horas >= 6 && horas < 12) {
    mensajeBienvenida = "¡Buenos días!";
} else if (horas >= 12 && horas < 18) {
    mensajeBienvenida = "¡Buenas tardes!";
} else {
    mensajeBienvenida = "¡Buenas noches!";
}

// Mostrar el mensaje en el h1
document.getElementById("bienvenida").textContent = mensajeBienvenida;
