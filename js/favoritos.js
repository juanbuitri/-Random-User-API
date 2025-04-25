function mostrarFavoritos() {
    const app = document.getElementById('app');
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    app.innerHTML = favoritos.map(user => `
        <div class="user">
            <p>${user.name}</p>
            <button onclick="eliminarFavorito('${user.email}')">Eliminar</button>
        </div>
    `).join('');
}

function guardarFavorito(email) {
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    const nuevoFavorito = { email, name: email };
    favoritos.push(nuevoFavorito);
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
}

function eliminarFavorito(email) {
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    const actualizados = favoritos.filter(fav => fav.email !== email);
    localStorage.setItem('favoritos', JSON.stringify(actualizados));
    mostrarFavoritos();
}