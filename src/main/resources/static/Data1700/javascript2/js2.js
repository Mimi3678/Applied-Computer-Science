function visPersonRegister() {
    //Oppretter først personene og deres objekter
    const person1 = {
        navn : "Line Jensen",
        adresse : "Askerveien 82",
        telefonnr : "12334455"
    };

    const person2 = {
        navn : "Ole Hansen",
        adresse : "Askerveien 83",
        telefonnr : "67834455"
    };

    /* Legg personene i et array, ved dette oppretter vi
       et tomt array først for å da push() person-objektene inn i det.
    */
    const personene = [];
    personene.push(person1, person2);

    //lage en tabell for hovedoverskriftene eller informasjon

    let ut = "<table><tr>" +
        "<th>Navn</th><th>Adresse</th><th>Telefonnr</th>" +
        "</tr>";

    /* printe ut objectene med vanlig løkke (for-løkke) slik at den
    legger til en og en person, husk å bruke of ettersom at det
     tillater deg det du vil gjøre. Istendenfor in.*/
    //Vi må skrive inn tabellen igjen, på følgende måte:
    for (let i of personene) {
        ut += "<tr><td> "+ i.navn +" </td><td> "+ i.adresse +" " + "</td>" +
            "<td> "+ i.telefonnr +"</td></tr>";
    }
    ut += "</table>";
    document.getElementById("personRegister").innerHTML = ut;
}



function ekstraPersonRegister() {
    //Oppretter først personene og deres objekter
    const person1 = {
        navn : "Line Jensen",
        adresse : "Askerveien 82",
        telefonnr : "12334455"
    };

    const person2 = {
        navn : "Ole Hansen",
        adresse : "Askerveien 83",
        telefonnr : "67834455"
    };

//Oppgave 1- Legg til flere personer i personregisteret.
    const person3 = {
        navn: "Nana Sarpong ",
        adresse: "Olavs veg 78",
        telefonnr: "66993388"
    };

    const person4 = {
        navn: "Jojo Ma",
        adresse: "Trondheimsveg 5 ",
        telefonnr: "00113388"
    };

    const personene = [];
    personene.push(person1, person2, person3, person4);

    // skriv ut
    let ut = "<table><tr>"
        ut+="<br /><br />";
        ut += "Usortert:<br />";
        "<th>Navn</th><th>Adresse</th><th>Telefonnr</th></tr>";
    for (let p of personene){
        ut+="<tr>";
        ut+="<td>"+p.navn+"</td><td>"+p.adresse+"</td><td>"+p.telefonnr+"</td>";
        ut+="</tr>";
    }
    ut+="</table>";

    //document.getElementById("personRegister").innerHTML=ut;

//ekstraoppgave 2 og 3 - sortering og ny utskrift m / annenhver rad fet
    function compare(a, b) {
        if (a.navn < b.navn) {
            return -1;
        }
        if (a.navn > b.navn) {
            return 1;
        }
        return 0;
    }
    personeneSortert = personene.sort(compare);

    ut+="<br /><br />";
    ut+="Sortert:<br />";
    ut+= "<table><tr>" +
        "<th>Navn</th><th>Adresse</th><th>Telefonnr</th>" +
        "</tr>";

    let teller=0;
    for (let p of personeneSortert){
        if(teller % 2 == 0) {
            ut+="<tr>";
            ut+="<td>"+p.navn+"</td><td>"+p.adresse+"</td><td>"+p.telefonnr+"</td>";
            ut+="</tr>";
        } else {
            ut+="<tr>";
            ut+="<td><strong>"+p.navn+"</strong></td><td><strong>"+p.adresse+
                "</strong></td><td><strong>"+p.telefonnr+"</strong></td>";
            ut+="</tr>";
        }
        teller++;
    }
    ut+="</table>";
    document.getElementById("Register").innerHTML=ut;

    // EKSTRAOPPGAVE 4 og 5 - legg til f.nr. og ny utskrift m/kvinner i fet skrift
    // Denne er vanskelig, og vi har ikke gjennomgått toString().
    // Kunne dog også brukt "(''+p.fnr)[8]" eller bare latt fnr være en streng.
    //
    ut+="<br /><br />";
    ut+="Med f.nr. og kvinner i fet skrift:<br />";
    ut+= "<table><tr>" +
        "<th>Navn</th><th>Adresse</th><th>Telefonnr</th><th>Fødselsnummer</th>" +
        "</tr>";

    //legger til fiktive fødselsnumre
    personeneSortert[0].fnr = 11028348143;
    personeneSortert[1].fnr = 14078548977;
    personeneSortert[2].fnr = 21059944243;
    personeneSortert[3].fnr = 30110043316;
    personeneSortert[4].fnr = 30120141197;

    for (let p of personeneSortert){
        // dersom det 9. sifferet i fødselsnummeret er et partall, tilhører det en kvinne
        if(p.fnr.toString()[8] % 2 == 0) {
            ut+="<tr>";
            ut+="<td><strong>"+p.navn+"</strong></td><td><strong>"+p.adresse+
                "</strong></td><td><strong>"+p.telefonnr+"</strong></td><td><strong>"+p.fnr+"</strong></td>";
            ut+="</tr>";
        } else {
            ut+="<tr>";
            ut+="<td>"+p.navn+"</td><td>"+p.adresse+"</td><td>"+p.telefonnr+"</td><td>"+p.fnr+"</td>";
            ut+="</tr>";
        }
    }
    ut+="</table>";

    document.getElementById("Register").innerHTML=ut;
}



