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
        const image = collector['sprites']['other']['official-artwork']['front_default'];
        const typeone = collector['types'][0]['type']['name'];
        // const typetwo = collector['types'][1]['type']['name'];
        const id = collector['id'];

        let backgroundstyle = typeone === 'grass' ? 'background-color: green' : ''
            || typeone === 'fire' ? 'background-color: red' : ''
                || typeone === 'water' ? 'background-color: blue' : ''
                    || typeone === 'bug' ? 'background-color: rgb(109, 109, 68)' : ''
                        || typeone === 'normal' ? 'background-color: rgb(190, 190, 131)' : ''
                            || typeone === 'poison' ? 'background-color: rgb(16, 73, 16)' : ''
                                || typeone === 'fairy' ? 'background-color: pink' : ''
                                    || typeone === 'electric' ? 'background-color: yellow' : ''
                                        || typeone === 'ground' ? 'background-color: brown' : ''
                                            || typeone === 'rock' ? 'background-color: gray' : ''
                                                || typeone === 'fighting' ? 'background-color: blanchedalmond' : ''
                                                    || typeone === 'psychic' ? 'background-color: rgb(94, 26, 94)' : ''
                                                        || typeone === 'ghost' ? 'background-color: black' : ''
                                                            || typeone === 'ice' ? 'background-color: aliceblue' : ''
                                                                || typeone === 'dragon' ? 'background-color: crimson' : '';
        data.innerHTML += `
                <div onclick="getYourPokemon(${y})" class="show-container" style="${backgroundstyle}">
                    <h2>${name}</h2>
                    <img src="${image}">
                    <span id="typeone">${typeone}</span>
                    <span id="typetwo"></span>
                    <span id="Id">${id}</span>
                </div>
                `;
    }

    showInputfield();
    showButton();
}

function showInputfield() {
    let getplaceinput = document.getElementById('place_input');
    getplaceinput.innerHTML = `<input id="search" placeholder="search" onchange="searchPokemon()">`;
}

function searchPokemon() {
    let searchResults = [];
    let searchLimit = 10;
    let search = document.getElementById('search').value.trim().toLowerCase();
    searchlength = search.length;
    let searchdata = document.getElementById(`load_pokemon`);
    searchdata.innerHTML = ``;

    if (searchlength >= 3) {
        for (let index = 0; index < pokemon.length; index++) {
            let searchcollector = pokemon[index];
            const name = searchcollector['name'];

            if (name.toLowerCase().includes(search)) {
                searchResults.push(pokemon);
                if (searchResults.length >= searchLimit) {
                    break; 
                }
            }
        }

        for (let index = 0; index < pokemon.length; index++) {
            let searchcollector = pokemon[index];
            const name = searchcollector['name'];
            const image = searchcollector['sprites']['other']['official-artwork']['front_default'];
            const typeone = searchcollector['types'][0]['type']['name'];
            // const typetwo = collector['types'][1]['type']['name'];
            const id = searchcollector['id'];

            let inlineStyle = typeone === 'grass' ? 'background-color: green' : ''
                || typeone === 'fire' ? 'background-color: red' : ''
                    || typeone === 'water' ? 'background-color: blue' : ''
                        || typeone === 'bug' ? 'background-color: rgb(109, 109, 68)' : ''
                            || typeone === 'normal' ? 'background-color: rgb(190, 190, 131)' : ''
                                || typeone === 'poison' ? 'background-color: rgb(16, 73, 16)' : ''
                                    || typeone === 'fairy' ? 'background-color: pink' : ''
                                        || typeone === 'electric' ? 'background-color: yellow' : ''
                                            || typeone === 'ground' ? 'background-color: brown' : ''
                                                || typeone === 'rock' ? 'background-color: gray' : ''
                                                    || typeone === 'fighting' ? 'background-color: blanchedalmond' : ''
                                                        || typeone === 'psychic' ? 'background-color: rgb(94, 26, 94)' : ''
                                                            || typeone === 'ghost' ? 'background-color: black' : ''
                                                                || typeone === 'ice' ? 'background-color: aliceblue' : ''
                                                                    || typeone === 'dragon' ? 'background-color: crimson' : '';

            if (searchcollector['name'].toLowerCase().includes(search)) {
                searchdata.innerHTML += `
             <div onclick="getYourPokemon(${index})" class="show-container" style="${inlineStyle}">
                 <h2>${name}</h2>
                 <img src="${image}">
                 <span id="typeone">${typeone}</span>
                 <span id="typetwo"></span>
                 <span id="Id">${id}</span>
             </div>
            `;
            }
        }
    } else {
        renderData();
    }
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
    let singleimage = getsingleinformation['sprites']['other']['official-artwork']['front_default'];
    let singletype = getsingleinformation['types'][0]['type']['name'];
    let singleid = getsingleinformation['id'];

    getplacesingle.innerHTML = `
                <div class="single-information-container">
                    <div class="show-top-container">
                        <h2 id="single_name">${singlename}</h2>
                        <img src="${singleimage}">
                        <span>${singletype}</span>
                        <span>${singleid}</span>
                    </div>
                    <div class="show-bottom-container">
                        <div class="place-buttons">
                            <button onclick="statsInformation(${collector})" class="information-buttons">stats</button>
                            <button onclick="movesInformation(${collector})" class="information-buttons">moves</button>
                            <button onclick="ingameInformation(${collector})" class="information-buttons">ingame</button>
                            <button onclick="gamesInformation(${collector})" class="information-buttons">games</button>
                        </div>
                        <div class="place-information" id="informations_bottom_card">
                        </div>
                    </div>
                        <div class="arrows">
                        <i onclick="left(${collector})" class="arrow left"></i>
                        <i onclick="right(${collector})" class="arrow right"></i>
                    </div>
                </div>
                </div>
                <i onclick="closeInformationCard()" class="close" tabindex="0" role="button">close</i>
                `;

    gamesInformation(collector);

}

function statsInformation(collector) {
    let selectstats = document.getElementById(`informations_bottom_card`);

    const getstatsinfomration = pokemon[collector];
    let statone = getstatsinfomration['stats'][0]['base_stat'];
    let stattwo = getstatsinfomration['stats'][1]['base_stat'];
    let statthree = getstatsinfomration['stats'][2]['base_stat'];
    let statfour = getstatsinfomration['stats'][3]['base_stat'];
    let statfive = getstatsinfomration['stats'][4]['base_stat'];
    let statsix = getstatsinfomration['stats'][5]['base_stat'];

    selectstats.innerHTML = `
        <span>hp:${statone}</span>
        <span>attack:${stattwo}</span>
        <span>defense:${statthree}</span>
        <span>special-attack:${statfour}</span>
        <span>special-defens:${statfive}</span>
        <span>speed:${statsix}</span>   
    `;
}

function movesInformation(collector) {
    let selectmoves = document.getElementById(`informations_bottom_card`);

    const getmovesinformation = pokemon[collector];
    let moveone = getmovesinformation['moves']['0']['move']['name'];
    let movetwo = getmovesinformation['moves']['1']['move']['name'];
    let movethree = getmovesinformation['moves']['2']['move']['name'];
    let movefour = getmovesinformation['moves']['3']['move']['name'];
    // let movefive = getmovesinformation['moves']['4']['move']['name'];

    selectmoves.innerHTML = `
        <span>${moveone}</span>
        <span>${movetwo}</span>
        <span>${movethree}</span>
        <span>${movefour}</span>
    `;
}

function ingameInformation(collector) {
    let selectmoves = document.getElementById(`informations_bottom_card`);

    const getmovesinformation = pokemon[collector];
    let ingame = getmovesinformation['sprites']['front_shiny'];
    // let movefive = getmovesinformation['moves']['4']['move']['name'];

    selectmoves.innerHTML = `
        <img src="${ingame}">
    `;
}

function gamesInformation(collector) {
    let selectmoves = document.getElementById(`informations_bottom_card`);

    const getgamesinformation = pokemon[collector];
    let gameone = getgamesinformation['game_indices']['0']['version']['name'];
    let gametwo = getgamesinformation['game_indices']['1']['version']['name'];
    let gamethree = getgamesinformation['game_indices']['2']['version']['name'];
    let gamefour = getgamesinformation['game_indices']['3']['version']['name'];
    let gamefive = getgamesinformation['game_indices']['4']['version']['name'];
    let gamesix = getgamesinformation['game_indices']['5']['version']['name'];
    let gameseven = getgamesinformation['game_indices']['6']['version']['name'];
    let gameeight = getgamesinformation['game_indices']['7']['version']['name'];
    let gamenine = getgamesinformation['game_indices']['8']['version']['name'];
    let gameten = getgamesinformation['game_indices']['9']['version']['name'];
    let gameeleven = getgamesinformation['game_indices']['10']['version']['name'];
    let gametwelve = getgamesinformation['game_indices']['11']['version']['name'];
    let gamethirteen = getgamesinformation['game_indices']['12']['version']['name'];
    let gamefoureen = getgamesinformation['game_indices']['13']['version']['name'];
    let gamefiveeen = getgamesinformation['game_indices']['14']['version']['name'];
    let gameesixteen = getgamesinformation['game_indices']['15']['version']['name'];
    let gameseventeen = getgamesinformation['game_indices']['16']['version']['name'];
    let gameeightteen = getgamesinformation['game_indices']['17']['version']['name'];
    let gamenineteen = getgamesinformation['game_indices']['18']['version']['name'];
    let gamentwenten = getgamesinformation['game_indices']['19']['version']['name'];

    selectmoves.innerHTML = `
        <div>
            <span>${gameone}</span>
            <span>${gametwo}</span>
            <span>${gamethree}</span>
            <span>${gamefour}</span>
            <span>${gamefive}</span>
            <span>${gamesix}</span>
            <span>${gameseven}</span>
            <span>${gameeight}</span>
            <span>${gamenine}</span>
            <span>${gameten}</span>
        </div>
        <div>
            <span>${gameeleven}</span>
            <span>${gametwelve}</span>
            <span>${gamethirteen}</span>
            <span>${gamefoureen}</span>
            <span>${gamefiveeen}</span>
            <span>${gamefiveeen}</span>
            <span>${gameesixteen}</span>
            <span>${gameseventeen}</span>
            <span>${gameeightteen}</span>
            <span>${gamenineteen}</span>
            <span>${gamentwenten}</span>
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
        id = pokemon.length - 1;
    }
    else {
        id--;
    }
    singleInformationCard(id);
}

function right(id) {
    if (id == pokemon.length - 1) {
        id = 0;
    }
    else {
        id++;
    }
    singleInformationCard(id);
}
