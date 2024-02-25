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
            return 'background-color: brown';
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