/* Clase libro */
class Libro {
    constructor(titulo, autor, estado) {
        this.titulo = titulo;
        this.autor = autor;
        this.estado = estado;
    }

    mostrarInfo() {
        console.log(`El libro "${this.titulo}" de ${this.autor} se encuentra ${this.estado}.`);
    }
}

/* Comenzar inventario */
let inventario = [];

/* Disposición de los libros */
let continuar = true;

while (continuar) {
    let titulo = prompt("Ingrese el título del libro:");
    let autor = prompt("Ingrese el autor del libro:");
    let estado = prompt("Ingrese el estado del libro (Disponible / Prestado):");

    // Crear una nueva instancia de Libro
    const nuevoLibro = new Libro(titulo, autor, estado);

    /* Agregar en inventario */
    inventario.push(nuevoLibro);

    /* Continuar agregando libros si/no */
    continuar = confirm("¿Desea agregar otro libro?");
}

// inventario completo
console.log("--- Inventario de la Biblioteca ---");

for (const libro of inventario) {
    libro.mostrarInfo();
}
