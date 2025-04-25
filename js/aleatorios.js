// Función para obtener un usuario aleatorio
function obtenerUsuarioAleatorio() {
    // Simulación de una API o lista de datos estáticos
    const usuarios = [
        { nombre: "Juan", edad: 30 },
        { nombre: "María", edad: 25 },
        { nombre: "Carlos", edad: 35 },
        { nombre: "Ana", edad: 28 },
        { nombre: "Luis", edad: 40 }
    ];

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * usuarios.length);

    // Retornar el usuario correspondiente al índice generado
    return usuarios[indiceAleatorio];
}

// Evento que se dispara al hacer clic en el botón "Aleatorios"
function mostrarAleatorios() {
    const usuario = obtenerUsuarioAleatorio();
    const app = document.getElementById('app');
    app.innerHTML = `
        <h2>Usuario Aleatorio</h2>
        <p><strong>Nombre:</strong> ${usuario.nombre}</p>
        <p><strong>Edad:</strong> ${usuario.edad}</p>
    `;
    console.log("Usuario mostrado:", usuario);
}

// Exportar la función si usas módulos
// module.exports = { obtenerUsuarioAleatorio, mostrarAleatorios };