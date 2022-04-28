$(function(){  // kjøres når dokumentet er ferdig lastet
    getAllRegistrations(); //hente alle registreringene
});

//henter alle
function getAllRegistrations() {
    $.get( "/getRegistrations", function(cars) {
        formatData(cars);
    });
}

function formatData(cars) {
    let ut = "<table class='table table-striped'><tr><th>Personnr</th><th>Navn</th><th>Adresse</th>" +
        "<th>Kjennetegn</th><th>Merke</th><th>Type</th><th></th><th></th></tr>";
    for (const car of cars) {
        ut += "<tr><td>" + car.ssn + "</td><td>" + car.name + "</td><td>" + car.address + "</td>" +
            "<td>" + car.characteristics + "</td><td>" + car.brand + "</td><td>" + car.type + "</td>" +
            "<td> <a class='btn btn-primary' href='endreRegistration.html?id="+car.id+"'>Endre</a></td>"+
            /*"<td> <button class='btn btn-primary' onclick='idToChange("+car.id+")'>Endre</button></td>"+*/
            "<td> <button class='btn btn-danger' onclick='deleteOneRegistration("+car.id+")'>Slett</button></td>"+
            "</tr>";
    }
    ut += "</table>";
    $("#cars").html(ut);
}

/* "<td> <button class='btn btn-primary' onclick='idTilEndring("+bil.id+")'>Endre</button></td>"+ */

/*function idToChange(id) {
    window.location.href = "/endreRegistration.html?"+id;
}*/

function deleteOneRegistration(id) {
    const url = "/deleteOneRegistration?ssn="+id;
    $.get( url, function() {
        window.location.href = "/"; //gjør at window refresher, så vi ser at det sletter
    });
}

function deleteAll() {
    $.get( "/deleteRegistrations", function() {
        getAllRegistrations();
    });
}














/* $(() => {
    $("#register").click(() => {
        const ssn = $("#ssn");
        const name = $("#name");
        const address = $("#address");
        const characteristics = $("#characteristics");
        const brand = $("#chosenBrand");
        const type = $("#chosenType");

        const registration = {
            ssn: ssn.val(),
            name: name.val(),
            address: address.val(),
            characteristics: characteristics.val(),
            brand: brand.val(),
            type: type.val()
        }

        if (inputval(registration)) {
            $.post("/api", registration, () => fetchRegistrations())

            ssn.val("")
            name.val("")
            address.val("")
            characteristics.val("")
            formatBrandInput()
            resetTypeInput()
        } else {
            console.log("Wrong input")
        }
    })

    $("#deleteAll").click(() => {
        $.ajax("/api", {
            type: "DELETE",
            success: () => fetchRegistrations(),
            error: (jqXhr, textStatus, errorMessage) => console.log(errorMessage)
        })
    });

    formatBrandInput();

    resetTypeInput();

    fetchRegistrations();
})

const fetchRegistrations = () => $.get("/api/registrations", list => formatList(list))

const formatList = list => {
    let msg = "";

    if (list.length > 0) {
        msg += "<table class='table table-striped'><tr><th>Personnr</th><th>Navn</th><th>Adresse</th><th>Kjennetegn</th>" +
            "<th>Merke</th><th>Type</th><th></th><th></th></tr>"

        for (let registration of list) {
            msg += "<tr><td>" + registration.ssn + "</td><td>" + registration.name + "</td><td>" + registration.address + "</td>" +
                "<td>" + registration.characteristics + "</td><td>" + registration.brand + "</td><td>" + registration.type + "</td>" +
                "<td> <a class='btn btn-primary' href='endreRegistration.html?id="+registration.id + "'>Endre</a></td>" +
                "<td> <button class='btn btn-danger' value='" + registration.id + "' name='tableDeleteOne'>Slett</button>" +
                "</td></tr>"
        }

        msg += "</table>";
    }

    $("#list").html(msg)

    $("button[name='tableDeleteOne']").on("click", element => {
        deleteSingleRegistration($(element.target).val())
    });
}

const deleteSingleRegistration = id => $.get("/api/deleteSingleRegistration?id=" + id, () => {
    fetchRegistrations();
})

const formatBrandInput = () => $.get("/api/cars", list => {
    let msg = "<select class='form-control' id='chosenBrand'>";

    let lastBrand = "";

    msg += "<option value='' selected hidden disabled >Velg Merke</option>";

    for (const car of list) {
        if (car.brand !== lastBrand) {
            msg += "<option>" + car.brand + "</option>";
        }
        lastBrand = car.brand;
    }

    msg += "</select>"

    $("#brand").html(msg);

    $("#chosenBrand").on("change", formatTypeInput);
})

const formatTypeInput = () => $.get("/api/cars", list => {
    let msg = "<select class='form-control' id='chosenType'>";

    const currentBrand = $("#chosenBrand").val();

    msg += "<option value='' selected hidden disabled >Velg Type</option>";

    for (const car of list) {
        if (car.brand === currentBrand) {
            msg += "<option>" + car.type + "</option>";
        }
    }

    msg += "</select>";

    $("#type").html(msg);
})

const resetTypeInput = () => {
    const msg = "" +
        "<select disabled name='' id='' class='form-control'>" +
        "<option disabled selected value=''>Velg merke for å velge type</option>" +
        "</select>"

    $("#type").html(msg);

}

const inputval = registration => {
    if (registration.ssn === "") return false
    else if (registration.name === "") return false
    else if (registration.address === "") return false
    else if (registration.characteristics === "") return false
    else if (registration.brand === "") return false
    else return registration.type
}

 */