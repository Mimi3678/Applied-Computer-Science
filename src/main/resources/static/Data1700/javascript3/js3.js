//Oppgave 1
function fullfor() {
    let navn = document.getElementById("navn").value;
    let alder = document.getElementById("alder").value;
    let output = document.getElementById("output");
    let alderTest = Number(alder);

    /*sjekker at det som blir skrevet inn på aldersfeltet
    inneholder et tall som er større enn null
     */
    if (isNaN(alderTest) || alderTest < 1) {
        alert("Du må skrive inn et tall som større enn 0!")
    } else {
        output.innerHTML = "Hei, " + navn + " du er " + alder + " år gammel."
    }
}

//Oppgave 2
//konvertering fra F til C - input felt for F
function fahrenheitToCelsius(f) {
    let c  = (5/9) * (parsefloat(f) - 32);
    let el = document.getElementById("celsius");
    el.value = c;
}

//konvertering fra C til F - Input felt for C
function celsiusToFahrenheit(c) {
    let f = (9/5) * parseFloat(c) + 32;
    let el = document.getElementById("fahrenheit");
    el.value = f;
}

//Oppgave 3
//lage de fire funksjonene

function pluss() {
    let  inn1 = Number(document.getElementById("inn1").value);
    let inn2 = Number(document.getElementById("inn2").value);
    let output = document.getElementById("kalk-output");

    //Input validering
    if(isNaN(inn1) || isNaN(inn2)) {
        alert ("Feil tallformat, prøv igjen.");
    } else {
        output.innerHTML = (inn1 + inn2).toString();
    }
}

function minus() {
    let inn1 = Number(document.getElementById("inn1").value);
    let inn2 = Number(document.getElementById("inn2").value);
    let output = document.getElementById("kalk-output");

    //input validering
    if(isNaN(inn1) || isNaN(inn1)) {
        alert ("Feil tallformat, prøv igjen.");
    } else {
        output.innerHTML = (inn1 - inn2).toString();
    }
}

function gange() {
    let inn1 = Number(document.getElementById("inn1").value);
    let inn2 = Number(document.getElementById("inn2").value);
    let output = document.getElementById("kalk-output");

    //input validering
    if (isNaN(inn1) || isNaN(inn2)) {
        alert ("Feil tallformat, prøv igjen.");
    }  else {
        output.innerHTML = (inn1 * inn2).toString();
    }
}

function dele() {
    let inn1 = Number(document.getElementById("inn1").value);
    let inn2 = Number(document.getElementById("inn2").value);
    let output = document.getElementById("kalk-output");

    //input validering
    if (isNaN(inn1) || isNaN(inn2)) {
        alert ("Feil tallformat, prøv igjen.");
    }  else {
        output.innerHTML = (inn1 / inn2).toString();
    }
}

//Oppgave 4
const personRegister = [];
function register() {
    //get input elements by id
    const navn = document.getElementById("innNavn").value;
    const adresse = document.getElementById("innAdresse").value;
    const telefonnr = document.getElementById("innTelefonnr").value;

    const innInformasjon = {
        getNavn: navn,
        getAdresse: adresse,
        getTelefonnr: telefonnr,
    };


    personRegister.push(innInformasjon);
    //nullstill inputboksene
    document.getElementById("innNavn").value="";
    document.getElementById("innAdresse").value="";
    document.getElementById("innTelefonnr").value="";
    visPersonRegister()}

function visPersonRegister() {
    /*lag en vanlig løkke (for-løkke) slik at den
legger til en og en person

*/
    let ut = "<table><tr>" +
        "<th>Navn</th><th>Adresse</th><th>Telefonnr</th>" +
        "</tr>";


    /*printe ut object, husk å bruke of ettersom at det
tillater deg det du vil gjøre. Istendenfor in. Vi må skrive inn
tabellen igjen, på følgende måte:
*/
    for (let i of personRegister) {
        ut += "<tr><td> " + i.navn + " </td><td> " + i.adresse + " " +
            "</td><td> " + i.telefonnr + "</td></tr>"
    };
    ut += "</table>"
    document.getElementById("personRegister").innerHTML = ut;

}

//Ekstraoppgave 1
const innListe = document.getElementById("liste");
const skrivInn = document.getElementById("skrivInn")

function leggTil() {
    let ut = "<li>" +
        "<input type='checkbox'>" +
        "<span> " + skrivInn.value + "</span>" +
        "</li>"

    skrivInn.value = ""
    innListe.insertAdjacentHTML('beforeend', ut);
}

//Ekstraoppgave 2
const uferdig = document.getElementById("uferdig");
const ferdig = document.getElementById("ferdig");
const skrivInn = document.getElementById("skrivInput")
let id = 0;

function leggTilGjoremol() {
    //Inkrementer id
    id++;
    let ut;
    ut =    '<li id="rad-' + id + '">'
    ut +=   '<input id="sjekkboks-' + id + '" type="checkbox" onchange="veksleStatus(' + id + ')">'
    ut +=   "<span>" + skrivInn.value + "</span>"
    ut +=   "</li>"

    //Tøm skriv inn feltet
    skrivInn.value = ""

    //Print gjøremål til tabell
    uferdig.innerHTML += ut;
}

function veksleStatus(id) {
    //Hent raden og sjekkboksen basert på id'en
    const sjekkbox = document.getElementById("sjekkboks-" + id)
    const rad = document.getElementById("rad-" + id)

    //Flytt raden avhengig av om sjekkboksen er sjekket
    if (sjekkbox.checked) {
        rad.style.textDecoration = 'line-through'
        ferdig.appendChild(rad)
    } else {
        rad.style.textDecoration = 'none'
        uferdig.appendChild(rad)
    }
}

//Ekstraoppgave 3
const liste = document.getElementById('list')
const oppgaver = []
const oppgave1 = {
    sporsmol: "Når er frist for oblig 1?",
    alternativer: ['1. Februar', '6. Februar', '12. Februar'],
    riktigIndex: 2
}

const oppgave2 = {
    sporsmol: "Hvor mange obliger er det i dette faget?",
    alternativer: ['3', '5', 'ingen', '2'],
    riktigIndex: 0
}

const oppgave3 = {
    sporsmol: "Hva står API for?",
    alternativer: ['App Program Instruction', 'Application Programming Interface', 'Det er ikke en forkortelse'],
    riktigIndex: 1
}

oppgaver.push(oppgave1)
oppgaver.push(oppgave2)
oppgaver.push(oppgave3)

function skrivUtOppgaver() {
    let ut = ""
    let id = 0
    let oppgaveIndex = 0
    for (let oppgave of oppgaver) {
        ut += "<li>"
        ut += "<h4>" + oppgave.sporsmol + "</h4>"
        ut += "<div>"
        for (let alternativ of oppgave.alternativer) {
            id++;
            ut += '<label for="' + id + '">' + alternativ + "</label>"
            ut += '<input id="' + id + '" type="radio" value="' + alternativ + '" name="oppgave-' + oppgaveIndex + '"><br>'
        }
        ut += "</div>"
        ut += "</li>"

        oppgaveIndex++;
    }
    ut += '<button onclick="sjekkSvar()">Sjekk svar</button>'
    liste.innerHTML = ut;
}

function sjekkSvar() {
    let riktigeSvar = 0
    for(let oppgaveIndex = 0; oppgaveIndex < oppgaver.length; oppgaveIndex++) {
        const radioKnapper = document.querySelectorAll('[name="oppgave-' + oppgaveIndex + '"]');
        let svar
        for (let alternativ of radioKnapper) {
            if (alternativ.checked) {
                svar = alternativ.value;
                break;
            }
        }

        if (sjekkOmRiktig(oppgaveIndex, svar)) {
            riktigeSvar++;
        }
    }
    liste.innerHTML = '';
    alert(riktigeSvar + " av " + oppgaver.length + " oppgaver er riktige")
}

function sjekkOmRiktig(oppgaveIndex, svar) {
    const oppgave = oppgaver[oppgaveIndex]
    if (oppgave.riktigIndex === oppgave.alternativer.indexOf(svar)) {
        return true;
    } else {
        return false;
    }
}
