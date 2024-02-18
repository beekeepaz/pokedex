const firstGenPokemon = ['bulbasaur', 'ivysaur', 'venusaur', 'charmander', 'charmeleon', 'charizard', 'squirtle', 'wartortle', 'blastoise', 'caterpie', 'metapod', 'butterfree', 'weedle', 'kakuna', 'beedrill', 'pidgey', 'pidgeotto', 'pidgeot', 'rattata', 'raticate', 'spearow', 'fearow', 'ekans', 'arbok', 'pikachu', 'raichu', 'sandshrew', 'sandslash', 'nidoran-f', 'nidorina', 'nidoqueen', 'nidoran-m', 'nidorino', 'nidoking', 'clefairy', 'clefable', 'vulpix', 'ninetales', 'jigglypuff', 'wigglytuff', 'zubat', 'golbat', 'oddish', 'gloom', 'vileplume', 'paras', 'parasect', 'venonat', 'venomoth', 'diglett', 'dugtrio', 'meowth', 'persian', 'psyduck', 'golduck', 'mankey', 'primeape', 'growlithe', 'arcanine', 'poliwag', 'poliwhirl', 'poliwrath', 'abra', 'kadabra', 'alakazam', 'machop', 'machoke', 'machamp', 'bellsprout', 'weepinbell', 'victreebel', 'tentacool', 'tentacruel', 'geodude', 'graveler', 'golem', 'ponyta', 'rapidash', 'slowpoke', 'slowbro', 'magnemite', 'magneton', 'farfetchd' , 'doduo', 'dodrio', 'seel', 'dewgong', 'grimer', 'muk', 'shellder', 'cloyster', 'gastly', 'haunter', 'gengar', 'onix', 'drowzee', 'hypno', 'krabby', 'kingler', 'voltorb', 'electrode', 'exeggcute', 'exeggutor', 'cubone', 'marowak', 'hitmonlee', 'hitmonchan', 'lickitung', 'koffing', 'weezing', 'rhyhorn', 'rhydon', 'chansey', 'tangela', 'kangaskhan', 'horsea', 'seadra', 'goldeen', 'seaking', 'staryu', 'starmie', 'mr-mime', 'scyther', 'jynx', 'electabuzz', 'magmar', 'pinsir', 'tauros', 'magikarp', 'gyarados', 'lapras', 'ditto', 'eevee', 'vaporeon', 'jolteon', 'flareon', 'porygon', 'omanyte', 'omastar', 'kabuto', 'kabutops', 'aerodactyl', 'snorlax', 'articuno', 'zapdos', 'moltres', 'dratini', 'dragonair', 'dragonite', 'mewtwo', 'mew'];

const dropdown = document.getElementById("pokemonDropdown");

function getDropDown() {
    const selectedPokemon = dropdown.value.toLowerCase();
    return selectedPokemon;
}

firstGenPokemon.forEach(pokemon => {
    const option = document.createElement("option");
    option.text = pokemon.charAt(0).toUpperCase() + pokemon.slice(1);
    dropdown.add(option);
  });

async function init() {
    await collectAll();
}

async function collectAll() {
    document.getElementById('load_pokemon').innerHTML = '';
    // let idname = getValueFromSearch() || getDropDown();
    // let url = `https://pokeapi.co/api/v2/pokemon/${idname}`;
    // let response = await fetch(url);
    // let responseAsJson = await response.json();
    // console.log(responseAsJson);

    // let namepokemon = responseAsJson['name'];
    // let imagepokemon = responseAsJson['sprites']['front_shiny'];
    // showName(namepokemon, imagepokemon);

    // let allurl = `https://pokeapi.co/api/v2/pokemon/`;
    // let allresponse = await fetch(allurl);
    // let allResponseAsJson = await allresponse.json();
    // console.log(allResponseAsJson);

    // for (let i = 0; i < allResponseAsJson['results'].length; i++) {
    //     const collect = allResponseAsJson['results'][i];
    //     let getname = collect['name'];


    for (let u = 0; u < firstGenPokemon.length; u++) {
        const getelementname = firstGenPokemon[u];
        
        await collectAllName(getelementname);
    }

        // for (let j = 0; j < getname['name'].length; j++) {
        //     const collectimage = getname['name'][j];
        //     let getimage = collectimage['front_shiny'];

            // showAllName(getname, getimage);
        }
    
    // let imageallpokemon = allResponseAsJson['sprites']['front_shiny'];

async function collectAllName(getname) {
    // let idname = getValueFromSearch() || getDropDown();
    let url = `https://pokeapi.co/api/v2/pokemon/${getname}`;
    let response = await fetch(url);
    let responseAsJson = await response.json();
    console.log(responseAsJson);

    let namepokemon = responseAsJson['name'];   
    let imagepokemon = responseAsJson['sprites']['front_shiny'];
    showName(namepokemon, imagepokemon);
}


function showAllName(nameallpokemon, getimage) {
    let showall = document.getElementById('load_pokemon');

    showall.innerHTML +=`
    <div class="show_container">
        <h2>${nameallpokemon}</h2>
        <img src="${getimage}">
    </div>
`;
}

function showName(namepokemon, imagepokemon){
    let loadname = document.getElementById('load_pokemon');

    loadname.innerHTML +=`
        <div class="show_container">
            <h2>${namepokemon}</h2>
            <img src="${imagepokemon}">
        </div>
    `;
}

function getValueFromInput(valueindex) {
    let inputvalue = document.getElementById(`${valueindex}`).value;
    return inputvalue;
}

function getValueFromSearch() {
    let searchvalue = getValueFromInput('search');
    return searchvalue;
}

// function getIdfromTag(tagindex) {
//     let tagid = document.getElementById(`${tagindex}`);
//     return tagid;
// }

// function getIdfromImage() {
//     let image = getIdfromTag('load_image');
//     return image;
// }

// function catchThemAll() {
//     let search = getValueFromSearch();
    
// }