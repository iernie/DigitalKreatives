$(function() {
    $('.nav li a[href^="#"]').click(function(e) {
        e.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top}, 200);
        return false;
    });
});

function resizePages() {
    var windowHeight = $(window).height();
    $(".page").css("min-height", windowHeight-5);
    $(".page > div").each(function() {
        var contentHeight = $(this).height();
        if((contentHeight+120) < windowHeight) {
            $(this).css('margin-top', (windowHeight/2-contentHeight/2)-100);
        }
    });
}

$(document).ready(function(){
    resizePages();
    $(".fancybox").fancybox();
    $(window).resize(function() {
        resizePages();
    });
});