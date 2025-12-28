/*
  ==========================================
  SIMULACIÓN DE FUNCIONES DE API
  ==========================================
*/

// API para obtener datos de un usuario
const obtenerUsuario = (id, callback) => {
  const demora = Math.random() * 1000 + 500;

  setTimeout(() => {
    if (!id) {
      callback('Error: ID de usuario no proporcionado.', null);
      return;
    }

    console.log(`Buscando usuario con ID: ${id}...`);
    const usuario = {
      id: id,
      nombre: 'John Doe',
      email: 'john.doe@example.com'
    };

    callback(null, usuario);
  }, demora);
};

// API para obtener los posts de un usuario
const obtenerPosts = (userId, callback) => {
  const demora = Math.random() * 1000 + 500;

  setTimeout(() => {
    if (!userId) {
      callback('Error: ID de usuario no proporcionado para buscar posts.', null);
      return;
    }

    console.log(`Buscando posts del usuario con ID: ${userId}...`);
    const posts = [
      { id: 101, titulo: 'Mi primer post', contenido: '...' },
      { id: 102, titulo: 'Mi segundo post', contenido: '...' }
    ];

    callback(null, posts);
  }, demora);
};

// API para obtener los comentarios de un post
const obtenerComentarios = (postId, callback) => {
  const demora = Math.random() * 1000 + 500;

  setTimeout(() => {
    if (!postId) {
      callback('Error: ID de post no proporcionado para buscar comentarios.', null);
      return;
    }

    console.log(`Buscando comentarios del post con ID: ${postId}...`);
    const comentarios = [
      { id: 1, texto: '¡Excelente post!' },
      { id: 2, texto: 'Muy informativo, gracias.' }
    ];

    callback(null, comentarios);
  }, demora);
};




/*
  ==========================================
   CALLBACK HELL
  ==========================================
*/

obtenerUsuario(1, (errorUsuario, usuario) => {
  if (errorUsuario) {
    console.error(errorUsuario);
    return;
  }

  console.log('Usuario obtenido:', usuario);

  obtenerPosts(usuario.id, (errorPosts, posts) => {
    if (errorPosts) {
      console.error(errorPosts);
      return;
    }

    console.log('Posts obtenidos:', posts);

    obtenerComentarios(posts[0].id, (errorComentarios, comentarios) => {
      if (errorComentarios) {
        console.error(errorComentarios);
        return;
      }

      console.log('Comentarios obtenidos:', comentarios);
    });
  });
});




/*
  ==========================================
   PROMESAS
  ==========================================
*/

const obtenerUsuarioPromesa = (id) => {
  return new Promise((resolve, reject) => {
    obtenerUsuario(id, (error, usuario) => {
      if (error) reject(error);
      else resolve(usuario);
    });
  });
};

const obtenerPostsPromesa = (userId) => {
  return new Promise((resolve, reject) => {
    obtenerPosts(userId, (error, posts) => {
      if (error) reject(error);
      else resolve(posts);
    });
  });
};

const obtenerComentariosPromesa = (postId) => {
  return new Promise((resolve, reject) => {
    obtenerComentarios(postId, (error, comentarios) => {
      if (error) reject(error);
      else resolve(comentarios);
    });
  });
};

// Encadenamiento con .then()
obtenerUsuarioPromesa(1)
  .then(usuario => {
    console.log('Usuario (Promesa):', usuario);
    return obtenerPostsPromesa(usuario.id);
  })
  .then(posts => {
    console.log('Posts (Promesa):', posts);
    return obtenerComentariosPromesa(posts[0].id);
  })
  .then(comentarios => {
    console.log('Comentarios (Promesa):', comentarios);
  })
  .catch(error => {
    console.error('Error (Promesa):', error);
  });




/*
  ==========================================
  ASYNC / AWAIT
  ==========================================
*/

const mostrarPerfilDeUsuario = async () => {
  try {
    const usuario = await obtenerUsuarioPromesa(1);
    console.log('Usuario (Async/Await):', usuario);

    const posts = await obtenerPostsPromesa(usuario.id);
    console.log('Posts (Async/Await):', posts);

    const comentarios = await obtenerComentariosPromesa(posts[0].id);
    console.log('Comentarios (Async/Await):', comentarios);

  } catch (error) {
    console.error('Error (Async/Await):', error);
  }
};

// Ejecutar proceso completo
mostrarPerfilDeUsuario();
