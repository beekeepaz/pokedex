function backgroundStyle(type) {
    switch (type) {
        case 'grass':
            return 'background: rgb(55,131,55)',
                'background: linear-gradient(180deg, rgba(55,131,55,1) 44%, rgba(14,73,85,1) 92%)';
        case 'fire':
            return 'background: rgb(128,33,33)',
                'background: linear-gradient(180deg, rgba(128,33,33,1) 44%, rgba(80,88,5,1) 92%)';
        case 'water':
            return 'background: rgb(55,109,131)',
                'background: linear-gradient(180deg, rgba(55,109,131,1) 44%, rgba(43,43,85,1) 92%)';
        case 'bug':
            return 'background: rgb(109,109,68)',
                'background: linear-gradient(180deg, rgba(109,109,68,1) 44%, rgba(93,170,83,1) 92%)';
        case 'normal':
            return 'background: rgb(74,68,109)',
                'background: linear-gradient(180deg, rgba(74,68,109,1) 44%, rgba(190,190,131,1) 92%)';
        case 'poison':
            return 'background: rgb(16,73,16)',
                'background: linear-gradient(180deg, rgba(16,73,16,1) 44%, rgba(52,187,33,1) 92%)';
        case 'fairy':
            return 'background: rgb(166,22,100)',
                'background: linear-gradient(180deg, rgba(166,22,100,1) 44%, rgba(207,119,184,1) 92%)';
        case 'electric':
            return 'background: rgb(177,177,38)',
                'background: linear-gradient(180deg, rgba(177,177,38,1) 44%, rgba(180,128,102,1) 92%)';
        case 'ground':
            return 'background: rgb(120,120,2)',
                'background: linear-gradient(180deg, rgba(120,120,2,1) 44%, rgba(166,13,13,1) 92%)';
        case 'rock':
            return 'background: rgb(115,115,105)',
                'background: linear-gradient(180deg, rgba(115,115,105,1) 44%, rgba(58,58,58,1) 92%)';
        case 'fighting':
            return 'background: rgb(148,196,173)',
                'background: linear-gradient(180deg, rgba(148,196,173,1) 30%, rgba(210,117,17,1) 85%)';
        case 'psychic':
            return 'background: rgb(94,26,94)',
                'background: linear-gradient(180deg, rgba(94,26,94,1) 60%, rgba(209,20,161,1) 100%)';
        case 'ghost':
            return 'background: rgb(0,0,0)',
                'background: linear-gradient(180deg, rgba(0,0,0,1) 60%, rgba(103,50,90,1) 100%)';
        case 'ice':
            return 'background: rgb(11,117,130)',
                'background: linear-gradient(180deg, rgba(11,117,130,1) 25%, rgba(88,152,185,1) 67%)';
        case 'dragon':
            return 'background: rgb(186,18,171)',
                'background: linear-gradient(180deg, rgba(186,18,171,1) 25%, rgba(141,68,82,1) 76%)';
        case 'steel':
            return 'background: rgb(120,120,2)',
                'background: linear-gradient(180deg, rgba(120,120,2,1) 44%, rgba(166,13,13,1) 92%)';
        case 'dark':
            return 'background: rgb(0,0,0)',
                'background: linear-gradient(180deg, rgba(0,0,0,1) 60%, rgba(103,50,90,1) 100%)';
        default:
            return '';
    }
}

function fontColorStyle(type) {
    switch (type) {
        case 'grass':
            return 'color: rgb(138, 163, 216)';
        case 'fire':
            return 'color: rgb(224, 238, 96)';
        case 'water':
            return 'color: blanchedalmond';
        case 'bug':
            return 'color: rgb(255, 255, 255)';
        case 'normal':
            return 'color: rgb(0, 0, 0)';
        case 'poison':
            return 'color: aliceblue';
        case 'fairy':
            return 'color: rgb(0, 0, 0)';
        case 'electric':
            return 'color: rgb(0, 0, 0)';
        case 'ground':
            return 'color: rgb(59, 206, 211)';
        case 'rock':
            return 'color: rgb(221, 201, 201)';
        case 'fighting':
            return 'color: rgb(128, 33, 33)';
        case 'psychic':
            return 'color: rgb(55, 131, 55)';
        case 'ghost':
            return 'color: aliceblue';
        case 'ice':
            return 'color: rgb(0, 0, 0)';
        case 'dragon':
            return 'color: rgb(255, 255, 255)';
        case 'steel':
            return 'color: rgb(0, 0, 0)';
        case 'dark':
            return 'color: aliceblue';
        default:
            return '';
    }
}
