$(function() {
    $('.nav li a[href^="#"]').click(function(e) {
        e.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top}, 200);
        return false;
    });
});

$(document).ready(function(){
    var windowHeight = $(window).height();
    $(".page").css("min-height", windowHeight-5);
    $(".work img").each(function() {
        var imgWidth = $(this).width();
        $(this).width(imgWidth-20);
    });
    $(".page > div").each(function() {
        var contentHeight = $(this).height()+120;
        if(contentHeight < windowHeight) {
            $(this).css('margin-top', (windowHeight/2-contentHeight/2)-100);
        }
    });
});