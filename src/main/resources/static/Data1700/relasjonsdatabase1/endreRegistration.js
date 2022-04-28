
$(function(){  // kjøres når dokumentet er ferdig lastet
   getAllCars();
   getOneRegistration();
});

function getAllCars() {
   $.get( "/getAllCars", function(cars) {
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
   const choosenBrand = $("#choosenBrand").val();
   $.get( "/getAllCars", function( cars) {
      formatTypes(cars,choosenBrand);
   });
}
function formatTypes(cars,choosenBrand){
   let ut = "<select id='choosenType'>";
   for(const car of cars ){
      if(car.brand === choosenBrand){
         ut+="<option>"+car.type+"</option>";
      }
   }
   ut+="</select>";
   $("#type").html(ut);
}

function getOneRegistration(){
   const id = window.location.search.substring(1); // kommer fra kallet i sql.js
   const url = "/getOneRegistration?"+id;
   $.get( url, function(oneRegistration) {
      // overfør til input-feltene i skjemaet
      $("#id").val(oneRegistration.id); // må ha med denne for å vite hvilken id
      $("#ssn").val(oneRegistration.ssn);
      $("#name").val(oneRegistration.name);
      $("#address").val(oneRegistration.address);
      $("#characteristics").val(oneRegistration.characteristics);
      $("#brand").val(oneRegistration.brand);
      $("#type").val(oneRegistration.type);
   });
}

function ChangeRegistration() {
   const registration = {
      id : $("#id").val(),
      ssn : $("#ssn").val(),
      name : $("#name").val(),
      address : $("#address").val(),
      characteristics : $("#characteristics").val(),
      brand : $("#choosenBrand").val(),
      type : $("#choosenType").val(),
   };
   $.post("/change", registration, function(){
   });

   window.location.href="sql.html";
}