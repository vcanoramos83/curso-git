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


// Validar el formulario de contacto
document.getElementById("contactForm").addEventListener("submit", function(event) {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;

    if (!nombre || !email || !mensaje) {
        alert("Todos los campos son obligatorios.");
        event.preventDefault();  // Evita que el formulario se envíe
    }
});
