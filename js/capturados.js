let usuariosCapturados = [];


function capturarUsuario(usuario) {
    if (!usuario || !usuario.nombre) {
        console.error("Usuario inválido.");
        return;
    }
    usuariosCapturados.push(usuario);
    console.log(`Usuario capturado: ${usuario.nombre}`);
}

// Función para mostrar los usuarios capturados
function mostrarCapturados() {
    const app = document.getElementById('app');
    if (usuariosCapturados.length === 0) {
        app.innerHTML = `<p>No hay usuarios capturados aún.</p>`;
    } else {
        let listaHTML = '<ul>';
        usuariosCapturados.forEach((usuario, index) => {
            listaHTML += `<li><strong>${usuario.nombre}</strong>, Edad: ${usuario.edad} 
            <button onclick="eliminarCapturado(${index})">Eliminar</button></li>`;
        });
        listaHTML += '</ul>';
        app.innerHTML = `
            <h2>Usuarios Capturados</h2>
            ${listaHTML}
        `;
    }
}

// Función para eliminar un usuario capturado
function eliminarCapturado(index) {
    if (index >= 0 && index < usuariosCapturados.length) {
        const eliminado = usuariosCapturados.splice(index, 1);
        console.log(`Usuario eliminado: ${eliminado[0].nombre}`);
        mostrarCapturados();
    } else {
        console.error("Índice fuera de rango.");
    }
}

// Exportar las funciones si usas módulos
// module.exports = { capturarUsuario, mostrarCapturados, eliminarCapturado };