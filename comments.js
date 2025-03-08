document.getElementById("commentForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const comentario = document.getElementById("comentario").value;

    if (nombre && comentario) {
        const comentarioDiv = document.createElement("div");
        comentarioDiv.classList.add("comentario");

        comentarioDiv.innerHTML = `
            <p><strong>${nombre}</strong> dice:</p>
            <p>${comentario}</p>
        `;

        document.getElementById("comentarios").appendChild(comentarioDiv);

        // Limpiar los campos
        document.getElementById("nombre").value = "";
        document.getElementById("comentario").value = "";
    }
});
