$(document).ready(function(){

    $("h1").fadeIn(2000);
    
    $(".testButtons").hover( function(){
        $(this).css("opacity", "1")
    },
    function() {
        $(this).css("opacity", "0.5")
    });

    $(".firstTestButton").on("click", function() {
        $(".firstTestButton").parent().fadeOut(3000); 
        $(".firstTestButton").parent().fadeIn(1000); 
    });
    


    $(".secondTestButton").on("click", function() {
        $(".secondTestButton").parent().fadeOut(1000); 
        setTimeout(() => {
            $(".secondTestButton").parent().fadeIn(1000); 
        }, 2000);
    });



    $(".thirdTestButton").on("click", function() {
        $(".thirdTestButton").parent().fadeOut(1000); 
        const parent = $(this).parent();
        setTimeout(() => {
            parent.find("p:first").text("New First Paragraph");
            parent.find("p:last").text("New Second Paragraph");
            $(".thirdTestButton").parent().fadeIn(1000); 
        }, 1000);
    });




    $(".fourthTestButton").on("click", function() {
        $(".fourthTestButton").parent().fadeOut(1000); 
        const parent = $(this).parent();
        setTimeout(() => {
            parent.prepend('jQuery seems easy enough after all');
            parent.find("p:first").text("New First Paragraph");
            parent.find("p:last").text("New Second Paragraph");
            $(".fourthTestButton").parent().fadeIn(1000); 
        }, 1000);

        setTimeout(() => {
            parent.find('p:last').after('<p>Really, really easy</p><br>');
        }, 2500);
        setTimeout(() => {
            parent.children(":not(button)").last().after("<p>Childproof, almost</p>");
        }, 5000);
    });

    $("fifthTestButton").hover(function() {
        // make the text morph into 'What would you like?'
        // then make other stuff happen
    })
















    
    }); // ready document 