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
const field1 = new Field(fieldPath);

// conditions to exit out of main loop
let win = false;
let collision = false;
let characterRow = 0;
let characterPosition = 0;

// MAIN LOOP
console.log('Your hat is somewhere lost, can you find it?')

while (!(win) && !(collision)) {
    field1.printField();
    let userDirections = prompt('Which way? ').toLowerCase();
    
    // move character
    if (userDirections === 'd' ) {
        characterRow += 1
    } else if (userDirections === 'r') {
        characterPosition += 1
    } else if (userDirections === 'u') {
        characterRow -= 1;
        field1.field[characterRow][characterPosition] = pathCharacter;
    } else if (userDirections === 'l') {
        characterPosition -= 1;
    }
    
    
    let currentPosition = field1.field[characterRow][characterPosition]
    
    // collision check
    if (currentPosition === hole) {
        console.log('Oops, you fell into a hole')
        collision = true;
    } else if (currentPosition === undefined) {
        console.log('You went out of bound')
        collision = true;
    } else if (currentPosition === hat) {
        console.log('Congratulations! You found your hat!');
        win = true;
    } else {
        field1.field[characterRow][characterPosition] = pathCharacter;
    }
} 

