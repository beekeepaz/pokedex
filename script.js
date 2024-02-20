const firstGenPokemon = ['bulbasaur', 'ivysaur', 'venusaur', 'charmander', 'charmeleon', 'charizard', 'squirtle', 'wartortle', 'blastoise', 'caterpie', 'metapod', 'butterfree', 'weedle', 'kakuna', 'beedrill', 'pidgey', 'pidgeotto', 'pidgeot', 'rattata', 'raticate', 'spearow', 'fearow', 'ekans', 'arbok', 'pikachu', 'raichu', 'sandshrew', 'sandslash', 'nidoran-f', 'nidorina', 'nidoqueen', 'nidoran-m', 'nidorino', 'nidoking', 'clefairy', 'clefable', 'vulpix', 'ninetales', 'jigglypuff', 'wigglytuff', 'zubat', 'golbat', 'oddish', 'gloom', 'vileplume', 'paras', 'parasect', 'venonat', 'venomoth', 'diglett', 'dugtrio', 'meowth', 'persian', 'psyduck', 'golduck', 'mankey', 'primeape', 'growlithe', 'arcanine', 'poliwag', 'poliwhirl', 'poliwrath', 'abra', 'kadabra', 'alakazam', 'machop', 'machoke', 'machamp', 'bellsprout', 'weepinbell', 'victreebel', 'tentacool', 'tentacruel', 'geodude', 'graveler', 'golem', 'ponyta', 'rapidash', 'slowpoke', 'slowbro', 'magnemite', 'magneton', 'farfetchd', 'doduo', 'dodrio', 'seel', 'dewgong', 'grimer', 'muk', 'shellder', 'cloyster', 'gastly', 'haunter', 'gengar', 'onix', 'drowzee', 'hypno', 'krabby', 'kingler', 'voltorb', 'electrode', 'exeggcute', 'exeggutor', 'cubone', 'marowak', 'hitmonlee', 'hitmonchan', 'lickitung', 'koffing', 'weezing', 'rhyhorn', 'rhydon', 'chansey', 'tangela', 'kangaskhan', 'horsea', 'seadra', 'goldeen', 'seaking', 'staryu', 'starmie', 'mr-mime', 'scyther', 'jynx', 'electabuzz', 'magmar', 'pinsir', 'tauros', 'magikarp', 'gyarados', 'lapras', 'ditto', 'eevee', 'vaporeon', 'jolteon', 'flareon', 'porygon', 'omanyte', 'omastar', 'kabuto', 'kabutops', 'aerodactyl', 'snorlax', 'articuno', 'zapdos', 'moltres', 'dratini', 'dragonair', 'dragonite', 'mewtwo', 'mew'];
let pokemon = [];
let currentIndex = 0;

async function init() {
    await collectAll();
}

async function collectAll() {
    const maxPokemonCount = Math.min(firstGenPokemon.length - currentIndex, 20);
    if (maxPokemonCount <= 0) {
        alert("Thats All");
        return;
    }

    for (let u = 0; u < maxPokemonCount; u++) {
        const getelementname = firstGenPokemon[currentIndex + u];
        await collectAllName(getelementname, currentIndex + u);
    }

    currentIndex += maxPokemonCount;
}

async function collectAllName(getname) {
    let url = `https://pokeapi.co/api/v2/pokemon/${getname}`;
    let response = await fetch(url);
    let responseAsJson = await response.json();
    pokemon.push(responseAsJson);
    renderData();
}

function renderData() {
    let data = document.getElementById(`load_pokemon`);
    data.innerHTML = ``;

    for (let y = 0; y < pokemon.length; y++) {
        const collector = pokemon[y];
        const name = collector['name'];
        const image = collector['sprites']['other']['dream_world']['front_default'];
        const typeone = collector['types'][0]['type']['name'];
        // const typetwo = collector['types'][1]['type']['name'];
        const id = collector['id'];
        console.log(name, image, typeone, id);
        data.innerHTML += `
                <div onclick="getYourPokemon(${y})" class="show_container">
                    <h2>${name}</h2>
                    <img src="${image}">
                    <span id="typeone">${typeone}</span>
                    <span id="typetwo"></span>
                    <span id="Id">${id}</span>
                </div>
                `;
    }

    showButton();
}

function showButton() {
    const cardButton = createHtmlButton();
    const getplacebutton = document.getElementById('load_button');
    getplacebutton.innerHTML = cardButton;
}

function singleInformationCard(collector) {
    const getplacesingle = document.getElementById('poketmon_data');
    getplacesingle.innerHTML = ``;

        const getsingleinformation = pokemon[collector];
        let singlename = getsingleinformation['name'];
        let singleimage = getsingleinformation['sprites']['other']['dream_world']['front_default'];
        let singletype = getsingleinformation['types'][0]['type']['name'];
        let singleid = getsingleinformation['id'];

        getplacesingle.innerHTML = `
                <div class="show_container">
                    <h2 id="single_name">${singlename}</h2>
                    <img src="${singleimage}">
                    <span>${singletype}</span>
                    <span>${singleid}</span>
                </div>
                <i onclick="closeInformationCard()" class="close" tabindex="0" role="button">close</i>
                <div class="arrows">
                    <i onclick="left(${collector})" class="myButton left"></i>
                    <i onclick="right(${collector})" class="myButton right"></i>
                </div>
                `;
    
}

function getYourPokemon(collector) {
    document.getElementById('one_pokemon').classList.remove('d-none');
    document.getElementById('main_card').classList.add('p-fixed');
    singleInformationCard(collector);
}

function closeInformationCard() {
    document.getElementById('one_pokemon').classList.add('d-none');
    document.getElementById('main_card').classList.remove('p-fixed');
}

function left(id) {
    if (id == 0) {
        id = firstGenPokemon.length - 1;
    }
    else {
        id--;
    }
    singleInformationCard(id);
}

function right(id) {
    if (id == firstGenPokemon.length - 1) {
        id = 0;
    }
    else {
        id++;
    }
    singleInformationCard(id);
}
