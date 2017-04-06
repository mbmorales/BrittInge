$(document).ready(function() {
 
    /* -- Sticky-Navigation-- */
    $('.js--section-about').waypoint(function (direction) {
        if (direction === "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
      
    }, {
        offset: '25px;'
    });
});