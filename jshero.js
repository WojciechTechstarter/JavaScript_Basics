
function lowerupper(name) {
    let lower = name.toLowerCase();
    let upper = name.toUpperCase();
    let result = lower + '-' + upper;
    return result;
}

console.log(lowerupper('Iza'))


let myName = 'Tomm';
if (myName == 'Lukas') {
    console.log('Alles Gute');

} else if (myName == 'Tom') {
    console.log('Bis Morgen!')

} else {
    console.log('Wer bist du!?')
}

//Fingerübung
//Definiert 2 Variablen (zahlen) a und b
//geb mithilfe von if else if else aus, welche Gröse ist, ob sie
//gleich groß sind

let a = 20
let b = 10
let divisionResult

if (a == b) {
    console.log('The number are equal')

} else if (a > b) {
    console.log(`${a} is bigger than ${b}`)

} else {
    console.log('a is smaller than b')
}

if (b != 0) {
    divisionResult = a / b
    console.log(divisionResult)
} else {
    console.log('You cannot divide by 0')
}

let punkte = 5

if (punkte > 90) {
    console.log('Note 1')

} else if (punkte > 80) {
    console.log('Note 1')

} else if (punkte > 70) {
    console.log('Note 1')

} else if (punkte > 60) {
    console.log('Note 4')

} else {
    console.log('Durchgefallen!')
}


console.log(1 === "1")