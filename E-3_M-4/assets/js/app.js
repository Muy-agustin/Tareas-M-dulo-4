/* Seleccionar imagen principal */
const imagenPrincipal = document.querySelector('#imagen-principal');

/* Contenedor imagen */
const contenedorImagenPrincipal = document.querySelector('#imagen-principal-container');

/*  Seleccion todos los tumbnails */
const thumbnails = document.querySelectorAll('.thumbnail');
 /* =============================== */
/* Añadir Event Listeners a los Thumbnails */ 
/* =============================== */

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {

     /* =============================== */
     /* Definir la Lógica del Evento */
     /* =============================== */

        /* Obtener la URL (src) del thumbnail clickeado */
        const nuevaSrc = thumbnail.src;

        /* Actualizar la imagen principal */
        imagenPrincipal.src = nuevaSrc;

        /* Obtener el texto alternativo (alt) del thumbnail */
        const textoAlt = thumbnail.alt;

     /* =============================== */
        /* Crear y Añadir el Pie de Foto */
     /* =============================== */

       /*  Buscar si ya existe un pie de foto anterior */
        const pieDeFotoExistente = document.querySelector('#pie-de-foto');

        /* Si existe, eliminarlo */
        if (pieDeFotoExistente) {
            pieDeFotoExistente.remove();
        }

        /* Crear un nuevo elemento <p> */
        const nuevoPieDeFoto = document.createElement('p');

        /* Asignar un id al párrafo */
        nuevoPieDeFoto.id = 'pie-de-foto';

        /* Asignar el texto del pie de foto */
        nuevoPieDeFoto.textContent = textoAlt;

        /* Añadir el pie de foto al contenedor de la imagen principal */
        contenedorImagenPrincipal.appendChild(nuevoPieDeFoto);
    });
});
