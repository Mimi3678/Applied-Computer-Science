$(function(){  // kjøres når dokumentet er ferdig lastet
    getAllCars();
});

function getAllCars() {
    $.get( "/getAllCars", function( cars ) {
        formatCars(cars);
    });
}

function formatCars(cars){
    let ut = "<select id='choosenBrand' onchange='findTypes()'>";
    let i = 0;
    let lastBrand = "";
    ut+="<option>Velg merke</option>";
    for (const car of cars){
        if(car.brand != lastBrand){
            ut+="<option>"+car.brand+"</option>";
        }
        lastBrand = car.brand;
    }
    ut+="</select>";
    $("#brand").html(ut);
}

function findTypes(){
    const chosenBrand = $("#choosenBrand").val();
    $.get( "/getAllCars", function( cars ) {
        formatTypes(cars,chosenBrand);
    });
}
function formatTypes(cars,chosenBrand){
    let ut = "<select id='choosenType'>";
    for(const car of cars ){
        if(car.brand === chosenBrand){
            ut+="<option>"+car.type+"</option>";
        }
    }
    ut+="</select>";
    $("#type").html(ut);
}

function RegisterCars() {
    const vehicle = {
        ssn : $("#ssn").val(),
        name : $("#name").val(),
        address : $("#address").val(),
        characteristics : $("#characteristics").val(),
        brand : $("#choosenBrand").val(),
        type : $("#choosenType").val(),
    };
    $.post("/saveRegistrations", vehicle, function(){
        getAllRegistrations();
    });
    window.location.href = "sql.html";
}