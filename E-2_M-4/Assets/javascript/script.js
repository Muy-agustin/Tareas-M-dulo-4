/* El usuario*/
const usuario = {
  nombre: 'Ana',
  edad: 24,
  ciudad: 'Barcelona'
};

/* desestructuración y template literals */
const crearMensajePresentacion = ({ nombre, edad, ciudad }) => {
  const mensaje = `Hola, mi nombre es ${nombre}, tengo ${edad} años y vivo en la ciudad de ${ciudad}.`;
  return mensaje;
};

/* llamado de la funcion y resultado */
const mensajeDeBienvenida = crearMensajePresentacion(usuario);
console.log(mensajeDeBienvenida);
