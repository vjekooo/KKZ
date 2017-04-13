$(function() {

    var $sidebar   = $(".nav-bar"),
        $window    = $(window),
        offset     = $sidebar.offset(),
        topPadding = 1;

    $window.scroll(function() {
        if ($window.scrollTop() > offset.top) {
            $sidebar.stop().animate({
                top: $window.scrollTop() - offset.top + topPadding
            });
        } else {
            $sidebar.stop().animate({
                top: 0
            });
        }
    });

});
