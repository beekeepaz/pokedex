function allCardHtml(y, name, image, typeone, typetwo, id, backgroundstyle) {
    return `
        <div onclick="getYourPokemon(${y})" class="show-container" style="${backgroundstyle}">
            <h2>${name}</h2>
            <img src="${image}">
            <span>${typeone}</span>
            <span>${typetwo}</span>
            <span>${id}</span>
        </div>
    `;
}

function searchCardHtml(name, image, typeone, typetwo, id, backgroundstyle, index) {
    return `
        <div onclick="getYourPokemon(${index})" class="show-container" style="${backgroundstyle}">
            <h2>${name}</h2>
            <img src="${image}">
            <span>${typeone}</span>
            <span>${typetwo}</span>
            <span>${id}</span>
        </div>
    `;
}

function singleCardHtml(collector, singlename, singleimage, singletypeone, singletypetwo, singleid, backgroundstyle) {
    return `
        <div class="single-information-container">
            <div class="show-top-container" style="${backgroundstyle}">
                <h2>${singlename}</h2>
                <img src="${singleimage}">
                <span>${singletypeone}</span>
                <span>${singletypetwo}</span>
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
        <i onclick="closeInformationCard()" class="close" tabindex="0" role="button">close</i>
    `;
}

function moveHtml(moveName) {
    if (moveName) {
        return `<span>${moveName}</span>`;
    } else {
        return '';
    }
}

function gamesHtml(gameName) {
    if (gameName) {
        return `<span>${gameName}</span>`;
    } else {
        return '';
    }
}

function statsHtml() {
    let selectstats = document.getElementById('informations_bottom_card');
    selectstats.innerHTML = '<div><canvas id="myChart"></canvas></div>';
}

function createHtmlButton() {
    return `
        <div>
            <button onclick="init()">Load one of the best games ever exist</button>
        </div>
    `;
}
