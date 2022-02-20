//oppgave 1
$(function () {
    $("#trykk").click (function () {
        const navn = $("#navn").val();
        const alder = $("#alder").val();

        const alderTest = Number(alder);

        /*sjekker at det som blir skrevet inn på aldersfeltet
        inneholder et tall som er større enn null
         */
        if (isNaN(alderTest) || alderTest <= 0) {
            alert("Du må skrive inn et tall som større enn 0!")
        }
        else {
            $("#output").html("Hei " + navn + ", du er " + alder + " år gammel.");
        }
    })
})

//oppgave 2
//konvertering fra F til C - input felt for F
function cToF(celsius) {
    const fahrenheit  = (9/5) * parseFloat(celsius) + 32;
    //document.getElementById("celsius").value = celsius.toFixed(2);
    $("#fahrenheit").val(fahrenheit.toFixed(2));
}

//konvertering fra C til F - Input felt for C
function fToC (fahrenheit) {
    const celsius = (5/9) * (parsefloat(fahrenheit) - 32);
    //document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
    $("#celsius").val(celsius.toFixed(2));
}


//oppgave 3
function validator(inn1,inn2) {
    if (isNaN(inn1) || isNaN(inn2)) {
        $("#kalk-output").html("Du må skrive inn et tall!");
        return false;
    }
    return true;
}

function skrivUt(resultat) {
    $("#kalk-output").html(resultat);
}

//lage de fire funksjonene
function pluss() {
    const inn1 = Number($("#inn1").val());
    const inn2 = Number($("#inn2").val());
    if (!validator(inn1, inn2)) return
    skrivUt(inn1 + inn2);
}


function minus() {
    const inn1 = Number($("#inn1").val());
    const inn2 = Number($("#inn2").val());

    if (!validator(inn1, inn2)) return
    skrivUt(inn1 - inn2);
}

function gange() {
    const inn1 = Number($("#inn1").val());
    const inn2 = Number($("#inn2").val());

    if(!validator(inn1, inn1)) return
    skrivUt(inn1 * inn2);
}

function dele() {
    const inn1 = Number($("#inn1").val());
    const inn2 = Number($("#inn2").val());

    if (!validator(inn1,inn2)) return
    skrivUt(inn1 / inn2);
}

//oppgave 4
const personRegister = [];
function register() {
    //get input elements by id
    const navn = $("#innNavn").val();
    const adresse = $("#innAdresse").val();
    const telefonnr = $("#innTelefonnr").val();

    const innInformasjon = {
        navn: navn,
        adresse: adresse,
        telefonnr: telefonnr,
    };

    personRegister.push(innInformasjon);

    //nullstill inputboksene
    $('input').val('');
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
            "</td><td> " + i.telefonnr + "</td>";
        ut += "</tr>";
    }
    ut += "</table>"
    $("#personRegister").html(ut);
}

//ekstraoppgave 1
//const liste = $("#gjoremol");
// const skrivInn = $("#skrivInn");

function leggTilGjoremol() {
    let ut;
    ut = "<li>"
    ut += "<input type='checkbox'>"
    ut += "<span> " + $("#skrivInn").val() + "</span>"
    ut +=   "</li>";

    //liste.insertAdjacentHTML('beforeend', ut);
    $("#gjoremol").append(ut);
    //å nullstille
    $('input').val('');

}

//ekstraoppgave 2
const liste = $("#uferdigList")
const ferdigListe = $("#ferdigList")
let id = 0

//let skrivInn;
//skrivInn= $("#skrivInn");

function leggTil(task) {
    let ut = "<li id ='rad-"+id+"'>" +
        "<input type='checkbox' id='input -"+id +"' onchange='flytt("+id+")'>" +
        "<span>" + task + "</span>" +
        "</li>"

    //Print gjøremål til tabell
    liste.append(ut)
    //Tøm skriv inn feltet
    $("#skrivInn").val("")
    //Inkrementer id
    id++
}

function flytt(id) {
    //Hent raden og sjekkboksen basert på id'en
    const checkbox = $("#input-"+id)
    const rad = $("#rad-"+id)

    //Flytt raden avhengig av om sjekkboksen er sjekket
    if (checkbox.is(':checked')) {
        rad.css({"text-decoration" : "line-through"})
        ferdigListe.append(rad)
    }
    else {
        rad.css({"text-decoration" : "none"})
        liste.append(rad)
    }
}

//ekstraoppgave 3
const oppgaver = []


function skrivUtOppgaver() {
    const liste = $("#liste")

    const oppgave1 = {
        sporsmol: "Når er frist for oblig 1?",
        alternativer: ['3', '5', '6.februar', '12.februar'],
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

    oppgaver.push(oppgave1, oppgave2, oppgave3)


    let ut = ""
    let id = 0
    let oppgaveIndex = 0

    for (let oppgave of oppgaver) {
        ut += "<li>" +
            "<h4>" + oppgave.sporsmol + "</h4>" +
            "<div>"
        for (let alternativ of oppgave.alternativer) {
            ut += "<label for='" + id + "'>" + alternativ + "</label>" +
                "<input id='" + id + "' type='radio' value='" + alternativ + "' name='oppgave-" + oppgaveIndex + "'>"
            id++
        }
        ut +="</div>"
        ut += "</li>"
        oppgaveIndex++
    }
    ut += "<button onclick='sjekkSvar()'>Sjekk svar"
    liste.html(ut)
}

function sjekkSvar() {
    let riktigSvar = 0
    for(let oppgaveIndex = 0; oppgaveIndex < oppgaver.length; oppgaveIndex++) {
        const radioKnapper = $('[name="oppgave-' + oppgaveIndex + '"]')
        // const radioKnapper = $('oppgave-' + oppgaveIndex)
        let svar =""

        for(let alternativ of radioKnapper) {
            if(alternativ.checked) {
                svar = alternativ.value
                console.log(svar)
                break
            }
        }
        if(sjekkOmRiktig(oppgaveIndex, svar)) {
            riktigSvar++
        }

    }
    liste.html("")
    alert(riktigSvar + " av " + oppgaver.length + " oppgaver er riktig")

}

function sjekkOmRiktig(oppgaveIndex, svar) {
    const oppgave = oppgaver[oppgaveIndex]
    if(oppgave.riktigIndex === oppgave.alternativer.indexOf(svar)) {
        return true;
    }
    return false;
}