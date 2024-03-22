const prompt = require('prompt-sync')({sigint: true});

// requirements
const hat = '^';
const hole = 'O';
const fieldCharacter = '░'
const pathCharacter = '*';

const fieldPath = [
    [pathCharacter, fieldCharacter, hole, fieldCharacter, hole, fieldCharacter, hole,  fieldCharacter, fieldCharacter, fieldCharacter, hole, hole,  fieldCharacter],
    [fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, hole, hole, hole,  fieldCharacter, fieldCharacter, fieldCharacter, hole, hole,  fieldCharacter],
    [hole, fieldCharacter, fieldCharacter, fieldCharacter, hole, hole, hole,  fieldCharacter, fieldCharacter, fieldCharacter, hole, hole,  fieldCharacter],
    [fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, hole,  fieldCharacter, fieldCharacter, fieldCharacter, hole, hole,  fieldCharacter],
    [fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, hole,  fieldCharacter, fieldCharacter, fieldCharacter, hole, hole,  fieldCharacter],
    [fieldCharacter, fieldCharacter, hole, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter,  fieldCharacter, fieldCharacter, fieldCharacter],
    [hole, fieldCharacter, hole, hole, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter,  fieldCharacter, fieldCharacter, fieldCharacter],
    [hole, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, hat, fieldCharacter, fieldCharacter,  fieldCharacter, fieldCharacter, fieldCharacter],
    [hole, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, hole, hole,  fieldCharacter, fieldCharacter, fieldCharacter],
    [fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, hole, hole,  fieldCharacter, fieldCharacter, fieldCharacter],
];


class Field {
    constructor(field) {
        this.field = field;
    }

    printField() {
        this.field.forEach(fieldRow => {
            console.log(fieldRow.join(''));
        })
    }
}
            
            
// instantiations
const startingField = new Field(fieldPath);

// conditions to exit out of main loop
let win = false;
let collision = false;
let characterRow = 0;
let characterPosition = 0;

// MAIN LOOP
console.log('Your hat is somewhere lost, can you find it?')

while (!(win) && !(collision)) {
    startingField.printField();
    let userDirections = prompt('Which way? ').toLowerCase();

    switch (userDirections) {

        case 'd' : 
            characterRow += 1;
            break;

        case 'r' : 
            characterPosition += 1;
            break;

        case 'u' : 
            characterRow -= 1;
            break;

        case 'l' :
            characterPosition -= 1;
            break;
    }
    
    let currentPosition = startingField.field[characterRow][characterPosition]
    
    // collision check
    switch (currentPosition) {

        case hole : 
            console.log('Oops, you fell into a hole');
            collision = true;
            break;

        case undefined :
            console.log('You went out of bound');
            collision = true;
            break;

        case hat :
            console.log('Congratulations! You found your hat!');
            win = true;
            break;

        default :
            startingField.field[characterRow][characterPosition] = pathCharacter;
            break;
    }
} 

