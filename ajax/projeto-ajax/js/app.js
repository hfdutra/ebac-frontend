var todosPokemons = [];

function buscarPokemons() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=2000')
    .then(response => response.json())
    .then(data => {
        var promises = data.results.map(result => 
            fetch(result.url)
            .then(response => response.json())
        );

        Promise.all(promises)
        .then(pokemonData => {
            todosPokemons = pokemonData;
            mostrarPokemons(pokemonData);
        });
    });
}

function mostrarPokemons(pokemonData) {
    var container = document.getElementById('pokemonContainer');

    // Limpar resultados anteriores
    container.innerHTML = ''; 

    pokemonData.forEach(data => {
        var pokemonCard = document.createElement('div');
        pokemonCard.className = 'pokemon-card';

        var nome = document.createElement('h2');
        nome.className = 'pokemon-name';
        nome.textContent = data.name;

        var imagem = document.createElement('img');
        imagem.src = data.sprites.front_default;

        var altura = document.createElement('p');
        altura.textContent = `Altura: ${data.height / 10} m`;

        var peso = document.createElement('p');
        peso.textContent = `Peso: ${data.weight / 10} kg`;

        var tipos = document.createElement('p');
        tipos.textContent = `Tipos: ${data.types.map(typeInfo => typeInfo.type.name).join(', ')}`;

        pokemonCard.appendChild(nome);
        pokemonCard.appendChild(imagem);
        pokemonCard.appendChild(altura);
        pokemonCard.appendChild(peso);
        pokemonCard.appendChild(tipos);

        container.appendChild(pokemonCard);
    });
}

function filtrarPokemons() {
    var input = document.getElementById('searchInput');
    var filtro = input.value.toLowerCase();

    var pokemonsFiltrados = todosPokemons.filter(data => {
        var nome = data.name.toLowerCase();
        var tipos = data.types.map(typeInfo => typeInfo.type.name);

        return nome.includes(filtro) || tipos.some(tipo => tipo.includes(filtro));
    });

    mostrarPokemons(pokemonsFiltrados);
}

// Buscar os primeiros 20 Pokémon quando a página for carregada
window.onload = buscarPokemons;
