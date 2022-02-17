$(() => {
    $("#load").click(() => {
        $.post("/load", (data, status) => {
            console.log(status);

            if(status === "success") {
                alert("Valutaene er lastet")
            }else {
                alert("Valutaene er ikke lastet")
            }
        })
    })
})

