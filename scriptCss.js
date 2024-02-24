function backgroundStyle(type) {
    switch (type) {
        case 'grass':
            return 'background-color: green';
        case 'fire':
            return 'background-color: red';
        case 'water':
            return 'background-color: blue';
        case 'bug':
            return 'background-color: rgb(109, 109, 68)';
        case 'normal':
            return 'background-color: rgb(190, 190, 131)';
        case 'poison':
            return 'background-color: rgb(16, 73, 16)';
        case 'fairy':
            return 'background-color: pink';
        case 'electric':
            return 'background-color: yellow';
        case 'ground':
            return 'background-color: brown';
        case 'rock':
            return 'background-color: gray';
        case 'fighting':
            return 'background-color: blanchedalmond';
        case 'psychic':
            return 'background-color: rgb(94, 26, 94)';
        case 'ghost':
            return 'background-color: black';
        case 'ice':
            return 'background-color: aliceblue';
        case 'dragon':
            return 'background-color: crimson';
        default:
            return '';
    }
}