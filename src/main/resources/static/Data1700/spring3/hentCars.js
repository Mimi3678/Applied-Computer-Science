$(function () {
    hentAlleCars();
});

function hentAlleCars() {
    $.get("/hentCars", function(cars) {
        formaterCars(cars);
    });
}

function formaterCars(cars) {
    let ut = "<select id='valgtCar'>";
    for(const car of cars) {
        ut += "<option value='" + bil.merke + "'> " + bil.type + "</option>";
    }
    ut += "</select>";
    $("#bileneR").html(ut);
}
