const firstGenPokemon = ['bulbasaur', 'ivysaur', 'venusaur', 'charmander', 'charmeleon', 'charizard', 'squirtle', 'wartortle', 'blastoise', 'caterpie', 'metapod', 'butterfree', 'weedle', 'kakuna', 'beedrill', 'pidgey', 'pidgeotto', 'pidgeot', 'rattata', 'raticate', 'spearow', 'fearow', 'ekans', 'arbok', 'pikachu', 'raichu', 'sandshrew', 'sandslash', 'nidoran-f', 'nidorina', 'nidoqueen', 'nidoran-m', 'nidorino', 'nidoking', 'clefairy', 'clefable', 'vulpix', 'ninetales', 'jigglypuff', 'wigglytuff', 'zubat', 'golbat', 'oddish', 'gloom', 'vileplume', 'paras', 'parasect', 'venonat', 'venomoth', 'diglett', 'dugtrio', 'meowth', 'persian', 'psyduck', 'golduck', 'mankey', 'primeape', 'growlithe', 'arcanine', 'poliwag', 'poliwhirl', 'poliwrath', 'abra', 'kadabra', 'alakazam', 'machop', 'machoke', 'machamp', 'bellsprout', 'weepinbell', 'victreebel', 'tentacool', 'tentacruel', 'geodude', 'graveler', 'golem', 'ponyta', 'rapidash', 'slowpoke', 'slowbro', 'magnemite', 'magneton', 'farfetchd', 'doduo', 'dodrio', 'seel', 'dewgong', 'grimer', 'muk', 'shellder', 'cloyster', 'gastly', 'haunter', 'gengar', 'onix', 'drowzee', 'hypno', 'krabby', 'kingler', 'voltorb', 'electrode', 'exeggcute', 'exeggutor', 'cubone', 'marowak', 'hitmonlee', 'hitmonchan', 'lickitung', 'koffing', 'weezing', 'rhyhorn', 'rhydon', 'chansey', 'tangela', 'kangaskhan', 'horsea', 'seadra', 'goldeen', 'seaking', 'staryu', 'starmie', 'mr-mime', 'scyther', 'jynx', 'electabuzz', 'magmar', 'pinsir', 'tauros', 'magikarp', 'gyarados', 'lapras', 'ditto', 'eevee', 'vaporeon', 'jolteon', 'flareon', 'porygon', 'omanyte', 'omastar', 'kabuto', 'kabutops', 'aerodactyl', 'snorlax', 'articuno', 'zapdos', 'moltres', 'dratini', 'dragonair', 'dragonite', 'mewtwo', 'mew'];
let pokemon = [];
let searchResults = [];
let results = [];
let searchLimit = 10;
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
        const { name, image, typeone, typetwo, id, backgroundstyle } = allCardInformations(collector);
        data.innerHTML += allCardHtml(y, name, image, typeone, typetwo, id, backgroundstyle);
    }

    showInputfield();
    showButton();
}

function allCardInformations(collector) {
    const name = collector['name'];
    const image = collector['sprites']['other']['official-artwork']['front_default'];
    const typeone = collector['types'][0]['type']['name'];
    let typetwo = '';
    if (collector['types'].length > 1) {
        typetwo = collector['types'][1]['type']['name'];
    }
    const id = collector['id'];
    let backgroundstyle = backgroundStyle(typeone);

    return { name, image, typeone, typetwo, id, backgroundstyle };
}

function showInputfield() {
    let getplaceinput = document.getElementById('place_input');
    getplaceinput.innerHTML = `<input id="search" placeholder="search" onchange="searchPokemon()">`;
}

function searchPokemon() {
    let search = document.getElementById('search').value.trim().toLowerCase();
    searchlength = search.length;
    let searchdata = document.getElementById(`load_pokemon`);
    searchdata.innerHTML = ``;

    if (searchlength >= 3) {
        searchResults = searchFilter(search);
        renderSearchResults(searchResults, searchdata);
    } else {
        renderData();
    }
}

function searchFilter(search) {
    for (let index = 0; index < pokemon.length; index++) {
        let searchcollector = pokemon[index];
        const name = searchcollector['name'];
        if (name.toLowerCase().includes(search)) {
            results.push(searchcollector);
            if (results.length >= searchLimit) {
                break;
            }
        }
    }
    return results;
}

function renderSearchResults(searchResults, searchdata) {
    for (let index = 0; index < searchResults.length; index++) {
        let searchcollector = searchResults[index];
        const { name, image, typeone, typetwo, id, backgroundstyle } = searchCardInformation(searchcollector, index);
        searchdata.innerHTML += searchCardHtml(name, image, typeone, typetwo, id, backgroundstyle, index);
    }
}

function searchCardInformation(searchcollector, index) {
    const name = searchcollector['name'];
    const image = searchcollector['sprites']['other']['official-artwork']['front_default'];
    const typeone = searchcollector['types'][0]['type']['name'];
    let typetwo = '';
    if (searchcollector['types'].length > 1) {
        typetwo = searchcollector['types'][1]['type']['name'];
    }
    const id = searchcollector['id'];
    const backgroundstyle = backgroundStyle(typeone);

    return { name, image, typeone, typetwo, id, backgroundstyle, index };
}

function showButton() {
    const cardButton = createHtmlButton();
    const getplacebutton = document.getElementById('load_button');
    getplacebutton.innerHTML = cardButton;
}

function informationCard(collector) {
    const getplacesingle = document.getElementById('poketmon_data');
    getplacesingle.innerHTML = ``;
    const getsingleinformation = pokemon[collector];
    const { singlename, singleimage, singletypeone, singletypetwo, singleid, backgroundstyle } = singleCardInformation(getsingleinformation);
    getplacesingle.innerHTML = singleCardHtml(collector, singlename, singleimage, singletypeone, singletypetwo, singleid, backgroundstyle);
    statsInformation(collector);
}

function singleCardInformation(getsingleinformation) {
    let singlename = getsingleinformation['name'];
    let singleimage = getsingleinformation['sprites']['other']['official-artwork']['front_default'];
    let singletypeone = getsingleinformation['types'][0]['type']['name'];
    let singletypetwo = ``;
    if (getsingleinformation['types'].length > 1) {
        singletypetwo = getsingleinformation['types'][1]['type']['name'];
    }
    let singleid = getsingleinformation['id'];
    let backgroundstyle = backgroundStyle(singletypeone);
    return { singlename, singleimage, singletypeone, singletypetwo, singleid, backgroundstyle };
}

function statsInformation(collector) {
    const getstatsinfomration = pokemon[collector];
    const statsValues = [];
    const statLabels = ['attak', 'defens', 'special-attack', 'hp', 'speed', 'special-defens'];

    for (let i = 0; i < 6; i++) {
        statsValues.push(getstatsinfomration['stats'][i]['base_stat']);
    }

    statsHtml();

    statsChart('informations_bottom_card', 'myChart', statLabels, statsValues);
}

function movesInformation(collector) {
    let selectmoves = document.getElementById(`informations_bottom_card`);

    const getmovesinformation = pokemon[collector];
    let moveHtmlContent = '';

    for (let i = 0; i < 7; i++) {
        if (getmovesinformation['moves'][i]) {
            moveHtmlContent += moveHtml(getmovesinformation['moves'][i]['move']['name']);
        }
    }

    selectmoves.innerHTML = moveHtmlContent;
}

function ingameInformation(collector) {
    let selectmoves = document.getElementById(`informations_bottom_card`);

    const getmovesinformation = pokemon[collector];
    let ingame = getmovesinformation['sprites']['front_shiny'];

    selectmoves.innerHTML = `
        <img src="${ingame}">
    `;
}

function gamesInformation(collector) {
    let selectGames = document.getElementById(`informations_bottom_card`);

    const getGamesInformation = pokemon[collector];
    let gamesHtmlContent = '';

    if (getGamesInformation['game_indices']) {
        for (let i = 0; i < getGamesInformation['game_indices'].length; i++) {
            gamesHtmlContent += gamesHtml(getGamesInformation['game_indices'][i]['version']['name']);
        }
    }

    selectGames.innerHTML = gamesHtmlContent;
}

function getYourPokemon(collector) {
    document.getElementById('one_pokemon').classList.remove('d-none');
    document.getElementById('main_card').classList.add('p-fixed');
    informationCard(collector);
}

function closeInformationCard() {
    document.getElementById('one_pokemon').classList.add('d-none');
    document.getElementById('main_card').classList.remove('p-fixed');
}

function left(collector) {
    if (collector == 0) {
        collector = pokemon.length - 1;
    }
    else {
        collector--;
    }
    informationCard(collector);
}

function right(collector) {
    if (collector == pokemon.length - 1) {
        collector = 0;
    }
    else {
        collector++;
    }
    informationCard(collector);
}
