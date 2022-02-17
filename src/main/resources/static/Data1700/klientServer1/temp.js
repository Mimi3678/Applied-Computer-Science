$(() => {
    $("#getTemp").click(() => {
        const mnd = $("#mnd").val();

        $.get("/tmp?mnd=" + mnd, temp => {
                if (temp !== 0) {
                    $("#output").html("Det var en gjennomsnittstemperatur på " +
                    temp + " i " + mnd);
            } else {
                    $("#output").html("Du har oppgitt ugyldig måned");
                }
            })
        })
    })


       /*function trykk() {
        const url = "/mnd?innMonth=" + $("#tempInput").val();

               if (temp !== 0) {
                $("#output").html("Det var en gjennomsnittstemperatur på " + temp + " i " + mnd);
            }
            else {
                $("#output").html("Du har oppgitt ugyldig måned");
            }
            */