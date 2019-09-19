
$(function() {

    $("#submit-button").on("click", function (event) {

        console.log("hullo")
    
    
        let newburger = $("#enter-burger").val().trim();

        console.log(newburger)
    
        $.ajax(`/api/burgers`, {
            type: `POST`, 
            data: {
                    data: newburger
            }


        }).then(() => {
            console.log("Added your burger")
            location.reload()
        })
    })

    $(".eatBurgerButton").on("click", function(event) {

        let id = $(this).attr("data-burgerId")

        $.ajax(`/ateburger`, {
            type: `PUT`,
            data: {
                data: id
            }
        }).then(() => {
            console.log("chomp chomp")
            location.reload()
        })
    })

});




