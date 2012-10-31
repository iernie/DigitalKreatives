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
    $("#submit").click(function() {
        var emailName = $("#name").val();
        var emailEmail = $("#email").val();
        var emailMessage = $("#message").val();
        $.ajax({
            type: "POST",
            url: "email.php",
            data: "name=" + emailName + "&email=" + emailEmail + "&message=" + emailMessage,
            success: function(msg){
                alert(msg);
                if (msg === "success") {
                    $("#message").html("<div class='alert alert-success'>Mail sent!</div>");
                } else {
                    $("#message").html("<div class='alert alert-error'>An error occured while sending the mail.</div>");
                }
            }
        });
    });
    $(window).resize(function() {
        resizePages();
        $('[data-spy="scroll"]').each(function () {
            $(this).scrollspy('refresh');
        });
    });
});