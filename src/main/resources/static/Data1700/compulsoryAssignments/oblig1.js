//oppretter funksjonene kjopbillett() og slettbillett()

/* Legger arrayet utenfor kjopbillett funksjonen, slik at
    man kan skrive ut flere billitter, etter hverandre i tabellen
 */
let listeFilm = [];

function kjopbillett() {
    //get value from the input text

    let film = document.getElementById("filmer").value;
    let antall = document.getElementById("innAntall").value;
    let fornavn = document.getElementById("innFornavn").value;
    let etternavn = document.getElementById("innEtternavn").value;
    let telefonnr = document.getElementById("innTelefonnr").value;
    let epost = document.getElementById("innEpost").value;


    //sjekker om at det blir skrevet noe i input-feltene

    let text = "";
    //lager dette for at tabelen ikke skrives ut, når man får feilmelding
    let valid = true


    //om input value is null do something
    if (antall == 0 || isNaN(antall))  {
        text = "Må skrive inn heltall i antall!"
        document.getElementById("feilAntall").innerHTML = text;
        valid = false

    } else  {
        document.getElementById("feilAntall").innerHTML = "";
    }

    if (fornavn == 0) {
        text = "Må skrive noe inn i fornavnet!" ;
        document.getElementById("feilFornavn").innerHTML = text;
        valid = false

    }else  {
        document.getElementById("feilFornavn").innerHTML = "";
    }

    if (etternavn == 0) {
        text = "Må skrive noe inn i etternavnet!";
        document.getElementById("feilEtternavn").innerHTML = text;
        valid = false

    }else  {
        document.getElementById("feilEtternavn").innerHTML = "";
    }

    if (telefonnr == 0) {
        text = "Må skrive noe inn i Telefonnr!";
        document.getElementById("feilTelefonnr").innerHTML = text;
        valid = false

    }else  {
        document.getElementById("feilTelefonnr").innerHTML = "";
    }

    if  (epost == 0)  {
        text = "Må skrive noe inn i epost!";
        document.getElementById("feilEpost").innerHTML = text;
    }
    else  {
        document.getElementById("feilEpost").innerHTML = "";
    }


    //lager if-setningen for at tabellen ikke skrives ut, når man får feilmelding
    if (valid) {

        //billetten lagres som et objekt i et array
        let billett = {
            film : film,
            antall : antall,
            fornavn : fornavn,
            etternavn : etternavn,
            telefonnr : telefonnr,
            epost : epost,
        }

        //opprett en tom array først
        //Deretter pusher vi objektene gjennom den tomme arrayen
        listeFilm.push(billett);

        //Printe ut objektene fra array i en for-each løkke, gjennom en tabell
        //etter at knappen har blitt trykket
        let ut = "<table><tr>" +
            "<th style='padding: 10px;'>Film</th> <th style='padding: 10px;'>Antall</th> " +
            "<th style='padding: 10px;'>Fornavn</th> <th style='padding: 10px;'>Etternavn</th>" +
            "<th style='padding: 10px;'>Telefon</th> <th style='padding: 10px;'>Epost</th>" +"</tr>";

        for (let film of listeFilm) {
            ut += "<tr><td> "+ film.film +" </td><td> "+ film.antall +" " +
                "</td><td> "+ film.fornavn +" </td><td> "+ film.etternavn +" </td>" +
                "<td> "+ film.telefonnr +" </td><td> "+ film.epost +" </td></tr>"
        };

        document.getElementById("billettRegister").innerHTML = ut;

        /* lager dette for at alle input-feltene skal blankes ut
            etter at det har allerede blitt kjøpt et billett fra før av
         */
        document.getElementById("filmer").value = "";
        document.getElementById("innAntall").value = "";
        document.getElementById("innFornavn").value = "";
        document.getElementById("innEtternavn").value = "";
        document.getElementById("innTelefonnr").value = "";
        document.getElementById("innEpost").value = "";
    }
    ut += "</table>"

}


/* Når knappen slett alle billettene blir trykket, skal
 alle valgte billetter blir slettet
 */

function slettbillett() {
    listeFilm = [];

    //tømme utskriftene
    document.getElementById("billettRegister").innerHTML = "<table><tr>" +
        "<th>Film</th> <th>Antall</th> <th>Fornavn</th> <th>Etternavn</th>" +
        "<th>Telefon</th> <th>Epost</th>" +"</tr>";
}
