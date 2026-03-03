document.addEventListener('DOMContentLoaded', () => {
  const findBtn = document.getElementById('findBtn');
  const addToTeamBtn = document.getElementById('addToTeamBtn');
  const teamContainer = document.getElementById('teamContainer');

  const pokemonCache = {}; 

  findBtn.addEventListener('click', async () => {
    const input = document.getElementById('pokemonInput').value.trim().toLowerCase();
    if (!input) return alert('Please enter a Pokemon name or ID.');

    try {
      let data;
      if (pokemonCache[input]) {
        data = pokemonCache[input]; 
      } else {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
        if (!response.ok) throw new Error('Pokemon not found');
        data = await response.json();
        pokemonCache[input] = data;
      }

    
      const img = document.getElementById('pokemonImage');
      img.src = data.sprites.front_default || '';
      img.alt = data.name;

      
      const audio = document.getElementById('pokemonSound');
      let cryName = data.name.toLowerCase().replace('.', '-').replace(' ', '-');
      audio.src = `https://play.pokemonshowdown.com/audio/cries/${cryName}.mp3`;
      audio.load();

      
      const moves = data.moves.slice(0, 20).map(m => m.move.name);
      const selects = [
        document.getElementById('move1'),
        document.getElementById('move2'),
        document.getElementById('move3'),
        document.getElementById('move4')
      ];
      selects.forEach(select => {
        select.innerHTML = '';
        moves.forEach(move => {
          const option = document.createElement('option');
          option.value = move;
          option.textContent = move;
          select.appendChild(option);
        });
      });

    } catch (error) {
      alert(error.message);
    }
  });

  addToTeamBtn.addEventListener('click', () => {
    const name = document.getElementById('pokemonImage').alt;
    const imageSrc = document.getElementById('pokemonImage').src;
    const moves = [
      document.getElementById('move1').value,
      document.getElementById('move2').value,
      document.getElementById('move3').value,
      document.getElementById('move4').value
    ];

    if (!name || !imageSrc) return;

    const row = document.createElement('tr');
    const imgCell = document.createElement('td');
    const movesCell = document.createElement('td');

    const imgEl = document.createElement('img');
    imgEl.src = imageSrc;
    imgEl.alt = name;
    imgCell.appendChild(imgEl);

    const ul = document.createElement('ul');
    moves.forEach(m => {
      const li = document.createElement('li');
      li.textContent = m;
      ul.appendChild(li);
    });
    movesCell.appendChild(ul);

    row.appendChild(imgCell);
    row.appendChild(movesCell);
    teamContainer.appendChild(row);
  });
});