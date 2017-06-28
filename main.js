(function($) {
    "use strict";

    //for scrolling images
    const scrollingImages = ["car", "elly-lucy"];
    const thisImg = scrollingImages[Math.floor(Math.random() * scrollingImages.length)];
    $(".scrollHeader").css({"background-image": `url(images/scrolling/${thisImg}.jpg)`});

    //toggles tooltip
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });

    $('body').scrollspy({
        target: '#collapsing-nav-option'
    });

})(jQuery);

$(document).scroll(function(){
    const y = $(document).scrollTop();
    const t = $("#secondary-nav").offset().top;

    if (y > t) {
        $(".navbar").fadeIn();
    } else {
        $(".navbar").fadeOut();
    }
});