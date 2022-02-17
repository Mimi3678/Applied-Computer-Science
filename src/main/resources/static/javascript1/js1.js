//Oppgave 1
function helloWorld() {
    document.write("Hei verden!");
}

//Oppgave 2
function helloAlert() {
    alert("Hei verden!");
}

//Oppgave 3
function write(data) {
    document.write(data);
}

//Oppgave 4
function visNavn(data) {
    //siden det skal forandres, bruker vi datatypen let
    alert(data);
}

//oppgave 5
function writeConsole(data) {
    console.log(data);
}

//oppgave 6
function inputFarge(input) {
    input = input.fontcolor("red")
    document.write(input);
}

//oppgave 7
function inputStor(input) {
    input = input.toUpperCase()
    alert(input);
}

//oppgave 8
const tall = 1;
function visMelding() {
    console.log(tall);
}

//oppgave 9
const heltall = 1;
function tellOpp() {
    console.log(heltall)
    console.count(heltall);
}

//oppgave 10
let out = 0;

function tellMelding() {
    out += 1;
    let melding1 = "Du har trykket på knappen "
    let melding2 = "ganger."
    console.log(melding1 + out + melding2);
}