async function mostrarLista() {
    const app = document.getElementById('app');
    const usuarios = await getUsuarios();
    app.innerHTML = usuarios.map(user => `
        <div class="user">
            <p>${user.name.first} ${user.name.last}</p>
            <button onclick="guardarFavorito('${user.email}')">Añadir a Favoritos</button>
        </div>
    `).join('');
}
