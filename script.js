const firstGenPokemon = ['bulbasaur', 'ivysaur', 'venusaur', 'charmander', 'charmeleon', 'charizard', 'squirtle', 'wartortle', 'blastoise', 'caterpie', 'metapod', 'butterfree', 'weedle', 'kakuna', 'beedrill', 'pidgey', 'pidgeotto', 'pidgeot', 'rattata', 'raticate', 'spearow', 'fearow', 'ekans', 'arbok', 'pikachu', 'raichu', 'sandshrew', 'sandslash', 'nidoran-f', 'nidorina', 'nidoqueen', 'nidoran-m', 'nidorino', 'nidoking', 'clefairy', 'clefable', 'vulpix', 'ninetales', 'jigglypuff', 'wigglytuff', 'zubat', 'golbat', 'oddish', 'gloom', 'vileplume', 'paras', 'parasect', 'venonat', 'venomoth', 'diglett', 'dugtrio', 'meowth', 'persian', 'psyduck', 'golduck', 'mankey', 'primeape', 'growlithe', 'arcanine', 'poliwag', 'poliwhirl', 'poliwrath', 'abra', 'kadabra', 'alakazam', 'machop', 'machoke', 'machamp', 'bellsprout', 'weepinbell', 'victreebel', 'tentacool', 'tentacruel', 'geodude', 'graveler', 'golem', 'ponyta', 'rapidash', 'slowpoke', 'slowbro', 'magnemite', 'magneton', 'farfetchd', 'doduo', 'dodrio', 'seel', 'dewgong', 'grimer', 'muk', 'shellder', 'cloyster', 'gastly', 'haunter', 'gengar', 'onix', 'drowzee', 'hypno', 'krabby', 'kingler', 'voltorb', 'electrode', 'exeggcute', 'exeggutor', 'cubone', 'marowak', 'hitmonlee', 'hitmonchan', 'lickitung', 'koffing', 'weezing', 'rhyhorn', 'rhydon', 'chansey', 'tangela', 'kangaskhan', 'horsea', 'seadra', 'goldeen', 'seaking', 'staryu', 'starmie', 'mr-mime', 'scyther', 'jynx', 'electabuzz', 'magmar', 'pinsir', 'tauros', 'magikarp', 'gyarados', 'lapras', 'ditto', 'eevee', 'vaporeon', 'jolteon', 'flareon', 'porygon', 'omanyte', 'omastar', 'kabuto', 'kabutops', 'aerodactyl', 'snorlax', 'articuno', 'zapdos', 'moltres', 'dratini', 'dragonair', 'dragonite', 'mewtwo', 'mew'];

let responseAsJson;

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

async function collectAllName(getname, id) {
    let url = `https://pokeapi.co/api/v2/pokemon/${getname}`;
    let response = await fetch(url);
    responseAsJson = await response.json();
    showName(id);
}

function showName(id) {
    const cardHTML = createHtmlCard(id);
    const cardButton = createButton();
    showCards(cardHTML);
    showButton(cardButton);
    document.getElementById(`name${id}`).innerText = getSelectName();
    document.getElementById(`pictures${id}`).src = getSelectPictures();
    document.getElementById(`typeone${id}`).innerText = getSelectTypeOne();
    document.getElementById(`Id${id}`).innerText = getSelectId();
    const typeTwoElement = document.getElementById(`typetwo${id}`);
    checkTypeTwo(id, typeTwoElement);
}

function checkTypeTwo(id, typeTwoElement) {
    const typeTwo = getSelectTypeTwo();
    if (typeTwo) {
        typeTwoElement.innerText = typeTwo;
    } else {
        typeTwoElement.style.display = 'none';
    }
}

function createHtmlCard(id) {
    return `
        <div class="show_container">
            <h2 id="name${id}"></h2>
            <img id="pictures${id}">
            <span id="typeone${id}"></span>
            <span id="typetwo${id}"></span>
            <span id="Id${id}"></span>
        </div>
    `;
}

function createButton() {
    return `
        <div>
            <button onclick="init()">Load one of the best games ever exist</button>
        </div>
    `;
}


function showCards(cardHTML) {
    const showallcards = document.getElementById('load_pokemon');
    showallcards.innerHTML += cardHTML;
}

function showButton(cardButton) {
    const getplacebutton = document.getElementById('load_button');
    getplacebutton.innerHTML = cardButton;
}

function getSelectName() {
    return responseAsJson['name'];
}

function getSelectPictures() {
    return responseAsJson['sprites']['other']['dream_world']['front_default'];
}

function getSelectTypeOne() {
    return responseAsJson['types'][0]['type']['name'];
}

function getSelectTypeTwo() {
    if (responseAsJson['types'].length >= 2) {
        return responseAsJson['types'][1]['type']['name'];
    } else {
        return null;
    }
}

function getSelectId() {
    return responseAsJson['id'];
}
