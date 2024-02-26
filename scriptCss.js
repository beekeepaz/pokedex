function backgroundStyle(type) {
    switch (type) {
        case 'grass':
            return 'background-color: rgb(55, 131, 55)';
        case 'fire':
            return 'background-color: rgb(128, 33, 33)';
        case 'water':
            return 'background-color: rgb(43, 43, 136)';
        case 'bug':
            return 'background-color: rgb(109, 109, 68)';
        case 'normal':
            return 'background-color: rgb(190, 190, 131)';
        case 'poison':
            return 'background-color: rgb(16, 73, 16)';
        case 'fairy':
            return 'background-color: pink';
        case 'electric':
            return 'background-color: rgb(177, 177, 38)';
        case 'ground':
            return 'background-color: rgb(117, 52, 52)';
        case 'rock':
            return 'background-color: rgb(58, 58, 58)';
        case 'fighting':
            return 'background-color: blanchedalmond';
        case 'psychic':
            return 'background-color: rgb(94, 26, 94)';
        case 'ghost':
            return 'background-color: black';
        case 'ice':
            return 'background-color: aliceblue';
        case 'dragon':
            return 'background-color: rgb(141, 68, 82)';
        default:
            return '';
    }
}

function fontColorStyle(type) {
    switch (type) {
        case 'grass':
            return 'color: rgb(255, 255, 255)';
        case 'fire':
            return 'color: rgb(255, 255, 255)';
        case 'water':
            return 'color: rgb(255, 255, 255)';
        case 'bug':
            return 'color: rgb(255, 255, 255)';
        case 'normal':
            return 'color: rgb(0, 0, 0)';
        case 'poison':
            return 'color: rgb(255, 255, 255)';
        case 'fairy':
            return 'color: rgb(0, 0, 0)';
        case 'electric':
            return 'color: rgb(0, 0, 0)';
        case 'ground':
            return 'color: rgb(255, 255, 255)';
        case 'rock':
            return 'color: rgb(255, 255, 255)';
        case 'fighting':
            return 'color: rgb(0, 0, 0)';
        case 'psychic':
            return 'color: rgb(255, 255, 255)';
        case 'ghost':
            return 'color: rgb(255, 255, 255)';
        case 'ice':
            return 'color: rgb(0, 0, 0)';
        case 'dragon':
            return 'color: rgb(255, 255, 255)';
        default:
            return '';
    }
}
