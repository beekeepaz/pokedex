const firstGenPokemon = ['bulbasaur', 'ivysaur', 'venusaur', 'charmander', 'charmeleon', 'charizard', 'squirtle', 'wartortle', 'blastoise', 'caterpie', 'metapod', 'butterfree', 'weedle', 'kakuna', 'beedrill', 'pidgey', 'pidgeotto', 'pidgeot', 'rattata', 'raticate', 'spearow', 'fearow', 'ekans', 'arbok', 'pikachu', 'raichu', 'sandshrew', 'sandslash', 'nidoran-f', 'nidorina', 'nidoqueen', 'nidoran-m', 'nidorino', 'nidoking', 'clefairy', 'clefable', 'vulpix', 'ninetales', 'jigglypuff', 'wigglytuff', 'zubat', 'golbat', 'oddish', 'gloom', 'vileplume', 'paras', 'parasect', 'venonat', 'venomoth', 'diglett', 'dugtrio', 'meowth', 'persian', 'psyduck', 'golduck', 'mankey', 'primeape', 'growlithe', 'arcanine', 'poliwag', 'poliwhirl', 'poliwrath', 'abra', 'kadabra', 'alakazam', 'machop', 'machoke', 'machamp', 'bellsprout', 'weepinbell', 'victreebel', 'tentacool', 'tentacruel', 'geodude', 'graveler', 'golem', 'ponyta', 'rapidash', 'slowpoke', 'slowbro', 'magnemite', 'magneton', 'farfetchd', 'doduo', 'dodrio', 'seel', 'dewgong', 'grimer', 'muk', 'shellder', 'cloyster', 'gastly', 'haunter', 'gengar', 'onix', 'drowzee', 'hypno', 'krabby', 'kingler', 'voltorb', 'electrode', 'exeggcute', 'exeggutor', 'cubone', 'marowak', 'hitmonlee', 'hitmonchan', 'lickitung', 'koffing', 'weezing', 'rhyhorn', 'rhydon', 'chansey', 'tangela', 'kangaskhan', 'horsea', 'seadra', 'goldeen', 'seaking', 'staryu', 'starmie', 'mr-mime', 'scyther', 'jynx', 'electabuzz', 'magmar', 'pinsir', 'tauros', 'magikarp', 'gyarados', 'lapras', 'ditto', 'eevee', 'vaporeon', 'jolteon', 'flareon', 'porygon', 'omanyte', 'omastar', 'kabuto', 'kabutops', 'aerodactyl', 'snorlax', 'articuno', 'zapdos', 'moltres', 'dratini', 'dragonair', 'dragonite', 'mewtwo', 'mew'];
let pokemon = [];
let searchresults = [];
let results = [];
let searchLimit = 10;
let currentindex = 0;

async function init() {
    await collectAll();
}

async function collectAll() {
    const maxpokemoncount = Math.min(firstGenPokemon.length - currentindex, 20);
    if (maxpokemoncount <= 0) {
        alert("Thats All");
        return;
    }

    for (let u = 0; u < maxpokemoncount; u++) {
        const getnamepokemon = firstGenPokemon[currentindex + u];
        await getPokemonApi(getnamepokemon);
    }

    currentindex += maxpokemoncount;    
}

async function getPokemonApi(getname) {
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
        const { name, image, typeone, typetwo, id, backgroundstyle, fontcolorstyle } = allCardInformations(collector);
        data.innerHTML += allCardHtml(y, name, image, typeone, typetwo, id, backgroundstyle, fontcolorstyle);
    }

    showInputfield();
    showButton();
}

function allCardTypes(types) {
    const typeone = types[0]['type']['name'];
    let typetwo = '';
    if (types.length > 1) {
        typetwo = types[1]['type']['name'];
    }
    return { typeone, typetwo };
}

function allCardInformations(collector) {
    const name = collector['name'];
    const image = collector['sprites']['other']['official-artwork']['front_default'];
    const { typeone, typetwo } = allCardTypes(collector['types']);
    const id = collector['id'];
    let backgroundstyle = backgroundStyle(typeone);
    let fontcolorstyle = fontColorStyle(typeone);

    return { name, image, typeone, typetwo, id, backgroundstyle, fontcolorstyle };
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
        searchresults = searchFilter(search);
        renderSearchResults(searchresults, searchdata);
    } 
}

function searchFilter(search) {
    let results = [];
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

function renderSearchResults(searchresults, searchdata) {
    for (let r = 0; r < searchresults.length; r++) {
        let searchcollector = searchresults[r];
        const { name, image, typeone, typetwo, id, backgroundstyle } = searchCardInformation(searchcollector, r);
        searchdata.innerHTML += searchCardHtml(name, image, typeone, typetwo, id, backgroundstyle, r);
    }
}

function searchCardInformation(searchcollector, index) {
    const name = searchcollector['name'];
    const image = searchcollector['sprites']['other']['official-artwork']['front_default'];
    const { typeone, typetwo } = searchCardTypes(searchcollector);
    const id = searchcollector['id'];
    const backgroundstyle = backgroundStyle(typeone);

    return { name, image, typeone, typetwo, id, backgroundstyle, index };
}

function searchCardTypes(searchcollector) {
    const typeone = searchcollector['types'][0]['type']['name'];
    let typetwo = '';
    if (searchcollector['types'].length > 1) {
        typetwo = searchcollector['types'][1]['type']['name'];
    }
    return { typeone, typetwo };
}

function showButton() {
    const cardbutton = createHtmlButton();
    const getplacebutton = document.getElementById('load_button');
    getplacebutton.innerHTML = cardbutton;
}

function informationCard(collector) {
    const getplacesingle = document.getElementById('poketmon_data');
    getplacesingle.innerHTML = ``;
    const getsingleinformation = pokemon[collector];
    const { singlename, singleimage, singletypeone, singletypetwo, singleid, backgroundstyle, fontcolorstyle } = singleCardInformation(getsingleinformation);
    getplacesingle.innerHTML = singleCardHtml(collector, singlename, singleimage, singletypeone, singletypetwo, singleid, backgroundstyle, fontcolorstyle);
    statsInformation(collector);
}

function singleCardInformation(getsingleinformation) {
    let singlename = getsingleinformation['name'];
    let singleimage = getsingleinformation['sprites']['other']['official-artwork']['front_default'];
    let { singletypeone, singletypetwo } = singleTypes(getsingleinformation['types']);
    let singleid = getsingleinformation['id'];
    let backgroundstyle = backgroundStyle(singletypeone);
    let fontcolorstyle = fontColorStyle(singletypeone);
    return { singlename, singleimage, singletypeone, singletypetwo, singleid, backgroundstyle, fontcolorstyle };
}

function singleTypes(typesArray) {
    let singletypeone = typesArray[0]['type']['name'];
    let singletypetwo = ``;
    if (typesArray.length > 1) {
        singletypetwo = typesArray[1]['type']['name'];
    }
    return { singletypeone, singletypetwo };
}

function statsInformation(collector) {
    const getstatsinfomration = pokemon[collector];
    const statsValues = [];
    const statLabels = ['attak', 'defens', 'special-attack', 'hp', 'speed', 'special-defens'];

    for (let s = 0; s < 6; s++) {
        statsValues.push(getstatsinfomration['stats'][s]['base_stat']);
    }

    statsHtml();

    statsChart('informations_bottom_card', 'myChart', statLabels, statsValues);
}

function movesInformation(collector) {
    let movespot = document.getElementById(`informations_bottom_card`);

    const getmoves = pokemon[collector];
    let moves = '';

    for (let m = 0; m < 7; m++) {
        if (getmoves['moves'][m]) {
            moves += moveHtml(getmoves['moves'][m]['move']['name']);
        }
    }

    movespot.innerHTML = moves;
}

function ingameInformation(collector) {
    let selectmoves = document.getElementById(`informations_bottom_card`);

    const getmoves = pokemon[collector];
    let ingame = getmoves['sprites']['front_shiny'];

    selectmoves.innerHTML = `
        <img src="${ingame}">
    `;
}

function gamesInformation(collector) {
    let selectgamespot = document.getElementById(`informations_bottom_card`);

    const getgames = pokemon[collector];
    let games = '';

    if (getgames['game_indices']) {
        for (let g = 0; g < getgames['game_indices'].length; g++) {
            games += gamesHtml(getgames['game_indices'][g]['version']['name']);
        }
    }

    selectgamespot.innerHTML = games;
}

function getYourPokemon(collector) {
    document.getElementById('one_pokemon').classList.remove('d-none');
    document.getElementById('footer').classList.add('d-none');
    document.getElementById('header').classList.add('d-none');
    document.getElementById('main_card').classList.add('p-fixed');
    document.getElementById('load_button').classList.add('d-none');
    informationCard(collector);
}

function closeInformationCard() {
    document.getElementById('one_pokemon').classList.add('d-none');
    document.getElementById('main_card').classList.remove('p-fixed');
    document.getElementById('footer').classList.remove('d-none');
    document.getElementById('header').classList.remove('d-none');
    document.getElementById('load_button').classList.remove('d-none');
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
