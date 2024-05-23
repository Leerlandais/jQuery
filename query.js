$(document).ready(function(){       // maybe not needed but does the same as document.addEventListener("DOMContentLoaded"...)

    $("h1").fadeIn(2000);       // just because
    
    $(".testButtons").hover( function(){
        $(this).css("opacity", "1")
    },
    function() {
        $(this).css("opacity", "0.5")
    });         // I wanted a way to handle mouseenter and mouseleave in a toggle fashion. This is the best I could manage

    $(".firstTestButton").on("click", function() { // yeah, yeah, too easy
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
        $(".thirdTestButton").parent().fadeOut(1010); 
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
        }, 900);

        setTimeout(() => {
            parent.find('p:last').after('<p>Really, really easy</p><br>');
        }, 2500);
        setTimeout(() => {
            parent.children(":not(button)").last().after("<p>Childproof, almost</p>");
        }, 5000);
    });



    $(".fifthTestButton").one('mouseenter',function() { // nice! same as .on but only do it once. jQ thought of everything (I was going to write a function to handle that)
        const parent = $(this).parent();
        $(".fifthTestButton").hide();
            parent.find("h4").text("What would you like?");
            parent.find("h4").append("<br><button>Fade Things?</button>");
            parent.find("h4").append("<br><button>Replace Things?</button>");

            
        });
        
        // make the text morph into 'What would you like?'

        // then make other stuff happen












            $("#presentation").hide();
            $(window).scroll(function() {
            $("#presentation").fadeIn(2000);
          });





    
    }); // ready document 