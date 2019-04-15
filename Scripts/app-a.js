/*
Script from Blaine's design for EDU645
*/

$(document).ready(function () {
    $('[data-ec=container]').addClass("ec_hidden");

    $('[]').click(function () {
        var thisBox = $(this);

        if (thisBox.hasClass("ec_hidden")) {
            thisBox.removeClass("ec_hidden").addClass("ec_visible");
        } else {
           // thisBox.removeClass("ec_visible").addClass("ec_hidden");
            return;
        }
    });
    
    $('.ecBox').dblclick(function () {
        var thisBox = $(this);

        if (thisBox.hasClass("ec_hidden")) {
            //thisBox.removeClass("ec_hidden").addClass("ec_visible");
            return;
            
        } else {
            thisBox.removeClass("ec_visible").addClass("ec_hidden");
            
        }
    });
  
});

