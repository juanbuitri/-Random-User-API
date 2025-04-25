function mostrarBuscador() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <input type="text" id="search" placeholder="Buscar usuarios...">
        <div id="results"></div>
    `;
    document.getElementById('search').addEventListener('input', filtrarUsuarios);
}

async function filtrarUsuarios() {
    const query = document.getElementById('search').value.toLowerCase();
    const usuarios = await getUsuarios();
    const resultados = usuarios.filter(user =>
        user.name.first.toLowerCase().includes(query) ||
        user.name.last.toLowerCase().includes(query)
    );
    document.getElementById('results').innerHTML = resultados.map(user => `
        <div class="user">
            <p>${user.name.first} ${user.name.last}</p>
        </div>
    `).join('');
}