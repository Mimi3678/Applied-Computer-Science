$(() => {
    $("#getAmount").click(() => {
        const currency = $("#currency").val()
        const value = $("#value").val()

        const amount = {
            currency: currency,
            value: value
        }

        //sende inn amount, og få tilbake NOK
        $.get("/calc", amount, nok => {
            if(nok !== 0.0) {
                $("#output").html(value + " i " + currency + " blir: " + Math.round(nok) + " kr")
            } else {
                $("#output").html("Du skrev in ugyldig valutasort")
            }
        })
    })
})