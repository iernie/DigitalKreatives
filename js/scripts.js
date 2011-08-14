$(document).ready(function(){
    var slider = $('#slider').bxSlider({
        pager: false,
        nextText: '&gt;',
        prevText: '&lt;',
        speed: 1500,
        easing: 'easeOutQuint',
    });
    
    $("a.img").fancybox({
        autoScale: false,
        overlayOpacity: 0,
    });
});