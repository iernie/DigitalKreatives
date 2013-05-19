$(function () {
    $('.nav li a[href^="#"], .arrow a[href^="#"]').click(function (e) {
        e.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top}, 200);
        return false;
    });
});

function resizePages() {
    var windowHeight = $(window).height();
    $("section").css("min-height", windowHeight - 71);
    $('[data-spy="scroll"]').each(function () {
        $(this).scrollspy('refresh');
    });
}

$(window).load(function () {
    resizePages();
});

$(window).resize(function () {
    resizePages();
});

$(document).ready(function () {
    $(".fancybox")
        .fancybox({
            padding: 0
        });
});