async function fetchPokemon() {
    const countInput = document.getElementById('poke-count');
    const count = parseInt(countInput.value) || 5;
    const loader = document.getElementById('loader');
    const table = document.getElementById('pokemon-table');
    const tbody = document.getElementById('table-body');

    loader.style.display = 'block';
    table.style.display = 'none';
    tbody.innerHTML = '';
    

    try {
      const delay = new Promise(resolve => setTimeout(resolve, 2000));

      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${count}`);
      const data = await response.json();

      const promises = data.results.map(pokemon => fetch(pokemon.url).then(res => res.json()));
      const details = await Promise.all(promises);

      await delay;

      details.forEach(poke => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</td>
          <td><img class="poke-img" src="${poke.sprites.front_default}" alt="${poke.name}" /></td>
        `;
        tbody.appendChild(row);
      });

      loader.style.display = 'none';
      table.style.display = 'table';

    } catch (err) {
      console.error('Error fetching Pokemon:', err);
      loader.style.display = 'none';
      const errorMsg = document.createElement('p');
      errorMsgTxt.textContent = 'Failed to load Pokemon data.';
      errorMsgTxt.style.color = 'red';
      document.getElementById('container').appendChild(errorMsgTxt);
    }
  }

  window.addEventListener('DOMContentLoaded', fetchPokemon);