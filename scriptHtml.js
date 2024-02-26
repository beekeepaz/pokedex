function allCardHtml(y, name, image, typeone, typetwo, id, backgroundstyle, fontcolorstyle) {
    return `
        <div onclick="getYourPokemon(${y})" class="show-container" style="${backgroundstyle}">
            <h2 style="${fontcolorstyle}">${name}</h2>
            <img src="${image}">
            <span style="${fontcolorstyle}" class="info">${typeone}</span>
            <span style="${fontcolorstyle}" class="info">${typetwo}</span>
            <span style="${fontcolorstyle}" class="place-id info">Id:${id}</span>
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

function singleCardHtml(collector, singlename, singleimage, singletypeone, singletypetwo, singleid, backgroundstyle, fontcolorstyle) {
    return `
        <div class="single-information-container">
            <div class="show-top-container" style="${backgroundstyle}">
                <h2 style="${fontcolorstyle}">${singlename}</h2>
                <img class="single-image" src="${singleimage}">
                <span style="${fontcolorstyle}">${singletypeone}</span>
                <span style="${fontcolorstyle}">${singletypetwo}</span>
                <span style="${fontcolorstyle}">${singleid}</span>
            </div>
            <div class="place-buttons">
                <button class="information-buttons" onclick="statsInformation(${collector})" class="information-buttons">stats</button>
                <button class="information-buttons" onclick="movesInformation(${collector})" class="information-buttons">moves</button>
                <button class="information-buttons" onclick="ingameInformation(${collector})" class="information-buttons">ingame</button>
                <button class="information-buttons" onclick="gamesInformation(${collector})" class="information-buttons">games</button>
            </div>
            <div class="show-bottom-container">
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
        return `<span class="moves">${moveName}</span>`;
    } else {
        return '';
    }
}

function gamesHtml(gameName) {
    if (gameName) {
        return `<span class="games">${gameName}</span>`;
    } else {
        return '';
    }
}

function statsHtml() {
    let selectstats = document.getElementById('informations_bottom_card');
    selectstats.innerHTML = '<div class="chart-style"><canvas id="myChart"></canvas></div>';
}

function createHtmlButton() {
    return `
        <div>
            <button class="original-button" onclick="init()">Load more</button>
        </div>
    `;
}
