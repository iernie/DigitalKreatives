$(function() {
    $('.nav li a[href^="#"], .arrow-down a[href^="#"]').click(function(e) {
        e.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top}, 200);
        return false;
    });
});

function resizePages() {
    var windowHeight = $(window).height();
    $(".page").css("min-height", windowHeight-35);
    $(".page > div").each(function() {
        var contentHeight = $(this).height();
        if((contentHeight+120) < windowHeight) {
            $(this).css('margin-top', (windowHeight/2-contentHeight/2)-100);
        }
    });
}

function sendEmail() {
    var emailName = $("#name").val();
    var emailEmail = $("#email").val();
    var emailSubject = $("#subject").val();
    var emailMessage = $("#message").val();
    if (emailName === "" || emailEmail === "" || emailSubject === "" || emailMessage === "") {
        $(".alert-message").html("Please fill all input-fields.");
        return;
    }
    $.ajax({
        type: "POST",
        url: "email.php",
        data: "name=" + emailName + "&email=" + emailEmail + "&subject=" + emailSubject + "&message=" + emailMessage,
        success: function(msg){
            if (msg === "success") {
                $(".alert-message").html("Mail sent!");
            } else {
                $(".alert-message").html("An error occured while sending the email.");
            }
        }
    });
}

$(document).ready(function(){
    resizePages();
    $(".fancybox").fancybox();
    $("#submit").click(function() {
        sendEmail();
    });
    $(window).resize(function() {
        resizePages();
        $('[data-spy="scroll"]').each(function () {
            $(this).scrollspy('refresh');
        });
    });
});