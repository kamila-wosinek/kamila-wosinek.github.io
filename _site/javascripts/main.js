$(window).scroll(function() {
    var value = $(this).scrollTop();
    if ( value > 30 )
        $("header").addClass("scroll");
    else
        $("header").removeClass("scroll");
});
