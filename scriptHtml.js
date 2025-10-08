function allCardHtml(y, name, image, typeone, typetwo, id, backgroundstyle, fontcolorstyle) {
    return `
        <div onclick="getYourPokemon(${y})" class="show-container" style="${backgroundstyle}">
            <h2 style="${fontcolorstyle}">${name}</h2>
            <img class="allcard-image-place" src="${image}">
            <div class="allcard-types-place">
                <span style="${fontcolorstyle}" class="info">${typeone}</span>
                <span style="${fontcolorstyle}" class="info">${typetwo}</span>
            </div>
            <span class="allcard-id-place" style="${fontcolorstyle}" class="place-id info">${id}</span>
        </div>
    `;
}

function searchCardHtml(fontcolorstyle, name, image, typeone, typetwo, id, backgroundstyle) {
    return `
        <div onclick="getYourPokemon(${id-1})" class="show-container" style="${backgroundstyle}">
        <h2 style="${fontcolorstyle}">${name}</h2>
        <img class="allcard-image-place" src="${image}">
        <div class="allcard-types-place">
            <span style="${fontcolorstyle}" class="info">${typeone}</span>
            <span style="${fontcolorstyle}" class="info">${typetwo}</span>
        </div>
        <span class="allcard-id-place" style="${fontcolorstyle}" class="place-id info">${id}</span>
        </div>
    `;
}

function singleCardHtml(collector, singlename, singleimage, singletypeone, singletypetwo, singleid, backgroundstyle, fontcolorstyle) {
    return `
        <div class="single-information-container">
            <div class="show-top-container" style="${backgroundstyle}">
                <h2 class="single-header" style="${fontcolorstyle}">${singlename}</h2>
                <div class="type-position">
                    <span style="${fontcolorstyle}" class="place-id single-info">${singleid}</span>
                    <span style="${fontcolorstyle}" class="single-info">${singletypeone}</span>
                    <span style="${fontcolorstyle}" class="single-info">${singletypetwo}</span>
                </div>
                <img class="single-image" src="${singleimage}">
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

function displayLoadingHtml(element) {
    element.innerHTML = `
        <div class="place-loading-screen">
            <h1>Loading...</h1>
            <img class="loading-image" src="./img/Pokedex.png">
        </div>
    `;
}

function showInputHtml(getplaceinput) {
    getplaceinput.innerHTML = `
        <div class="place-head">
            <img class="logo-pokedex" src="./img/Pokedex.png">
            <input id="search" placeholder="search" oninput="searchPokemon()">
            <img class="logo" src="./img/poceball.png">
        </div>
    `;
}

function ingameImage(selectmoves, imgUrl) {
    selectmoves.innerHTML = `
        <img class="ingame-image"src="${imgUrl}">
    `;
}

function createImpressumHtml() {
    return `
        <div class="place-impressum">
            <h1 class="impressum-header">Impressum</h1>
            <button class="original-button color-btn" onclick="reLoad()">back</button>
        </div>
    `;
}
