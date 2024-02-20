// function createHtmlCard(name, image, typeone, id, y) {
//     return `
//         <div onclick="getYourPokemon(${y})" class="show_container">
//             <h2 id="name${name}"></h2>
//             <img id="pictures${image}">
//             <span id="typeone${typeone}"></span>
//             <span id="typetwo${id}"></span>
//             <span id="Id${id}"></span>
//         </div>
//     `;
// }

function createHtmlButton() {
    return `
        <div>
            <button onclick="init()">Load one of the best games ever exist</button>
        </div>
    `;
}

// function createHtmlSingle(id) {
//     return `
//         <div class="show_container">
//             <h2 id="single_name${id}"></h2>
//             <img id="single_pictures${id}">
//             <span id="single_typeone${id}"></span>
//             <span id="single_id${id}"></span>
//         </div>
//         <i onclick="closeInformationCard()" class="close" tabindex="0" role="button">close</i>
//         <div class="arrows">
//             <i onclick="left(${id})" class="myButton left"></i>
//             <i onclick="right(${id})" class="myButton right"></i>
//         </div>
//     `;
// }