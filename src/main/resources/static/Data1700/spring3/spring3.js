//lage en ready-funksjon for å laste inn
$(function() {
    hentAlleCars();
})

//skriver inn funksjon for å hente inn alle biler, fra server
function hentAlleCars() {
    $.get("/getCars", function(cars) {
        formaterCars(cars);
    });
}

function formaterCars(cars) {
    let ut = "<select id='valgtMerke' onchange='finnTyper()'>"
    let forrigeMerke = "";
    ut += "<option>Velg merke</option>";

    for(const car of cars) {
        //lage en sjekk
        if(car.merke !== forrigeMerke) {
            ut += "<option>" +bil.merke+ "</option>";
        }
        forrigeMerke = bil.merke;
    }
    ut += "</select>";
    $("#merke").html(ut);
}

function finnTyper() {
    const valgtMerke = $("#valgtMerke").val();
    $.get("/getCars", function(cars) {
        formaterTyper(cars, valgtMerke);
    });
}

function formaterTyper(biler, valgtMerke) {
    let ut = "<select id='valgtType'>";
    for (const car of cars) {
        if(car.merke === valgtMerke) {
            ut += "<option>" + car.type + "</option>";
        }
    }
    ut += "</select>";
    $("#type").html(ut);
}

//husk å lage objekt først

//Register button
function registrerBil() {
    //lage objektene
    const motorvogn = {
        personnr: $("#personnr").val(),
        navn: $("#navn").val(),
        adresse: $("#adresse").val(),
        kjennetegn: $("#kjennetegn").val(),
        //disse henter da verdiene fra dropdown menyen, ettersom det blir brukt "valgt"
        merke: $("#valgtMerke").val(),
        type: $("#valgtType").val(),
    };

    //sende det til server
    //lagre informasjon POST (hente alle objekter som er lagret inn på server)
    $.post("/save", motorvogn, function () {
        hentAlle();
    });

    //Tømme input-feltene
    $("#personnr").val("");
    $("#navn").val("");
    $("#adresse").val("");
    $("#kjennetegn").val("");
    $("#valgtMerke").val("");
    $("#valgtType").val("");

}
//implementere hentInformasjon som funksjon, fra server GET
function hentAlle() {
    $.get("/getAll", function(cars) {
        formaterData(cars);
    });
}

function formaterData(cars) {
    let ut = "<table class='table table-striped'>" +
        "<tr>" +
        "<th>Personnummer</th><th>Navn</th><th>Adresse</th>" +
        "<th>Kjennetegn</th><th>Merke</th><th>Type</th></tr>";
    for (const car of cars) {
        ut += "<tr><td> "+ cars.personnr +" </td><td> "+ cars.navn +"  </td><td> "+ cars.adresse +" </td>" +
            " <td> "+ cars.kjennetegn +" </td><td> "+ cars.merke +" </td><td> " + cars.type +" </td></tr>";
    }
    ut += "</table>";
    $("#bileneR").html(ut);
}


//Delete Button
function slettBil() {
    $.get ("/deleteAll", function() {
        hentAlle();
    });

}