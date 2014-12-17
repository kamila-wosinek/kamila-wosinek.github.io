$(window).scroll(function() {
    var value = $(this).scrollTop();
    if ( value > 80 )
        $("header").addClass("scroll");
    else
        $("header").removeClass("scroll");
});
