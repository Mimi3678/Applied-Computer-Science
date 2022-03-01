//husk å lage objekt først

//Register button
function registrerMotor() {
    //lage objektene
    const motorvogn = {
        personnr: $("#personnr").val(),
        navn: $("#navn").val(),
        adresse: $("#adresse").val(),
        kjennetegn: $("#kjennetegn").val(),
        merke: $("#merke").val(),
        type: $("#type").val(),
    };

    //sende det til server
    //lagre informasjon POST (hente alle objekter som er lagret inn på server)
    $.post("/lagre", motorvogn, function () {
        hentAlle();
    });

    //Tømme input-feltene
    $("#personnr").val("");
    $("#navn").val("");
    $("#adresse").val("");
    $("#kjennetegn").val("");
    $("#merke").val("");
    $("#type").val("");
}
//implementere hentInformasjon som funksjon, fra server GET
function hentAlle() {
    $.get("/hentAlle", function(biler) {
        formaterData(biler);
    });
}

function formaterData(biler) {
    let ut = "<table><tr>" +
        "<th>Personnummer</th><th>Navn</th><th>Adresse</th>" +
        "<th>Kjennetegn</th><th>Merke</th><th>Type</th></tr>";
    for (const bil of biler) {
        ut += "<tr><td> "+ bil.personnr +" </td><td> "+ bil.navn +"  </td><td> "+ bil.adresse +" </td>" +
            " <td> "+ bil.kjennetegn +" </td><td> "+ bil.merke +" </td><td> " + bil.type +" </td></tr>";
    }
    ut += "</table>";
    $("#bilene").html(ut);
}



//Delete Button
function slettMotorvogn() {
    $.get ("/slettAlle", function() {
        hentAlle();
    });

}
