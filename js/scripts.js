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

function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
}

function sendEmail() {
    var form = [], formError = false;
    $(".alert-message").html("");
    $("form").find("input,textarea").each(function (index) {
        form[index] = $(this).val();
        if (form[index] === "" || ($(this).attr("type") === "email" && !isValidEmailAddress(form[index]))) {
            $(this).closest(".control-group").addClass("error");
            formError = true;
        } else {
            $(this).closest(".control-group").removeClass("error");
        }
    });
    if (formError) {
        $(".alert-message").html("Please fill all input-fields.");
        return;
    }
    $.ajax({
        type: "POST",
        url: "email.php",
        data: "name=" + form[0] + "&email=" + form[1] + "&subject=" + form[2] + "&message=" + form[3],
        success: function (msg) {
            if (msg === "success") {
                $(".alert-message").html("Mail sent!");
            } else {
                $(".alert-message").html("An error occured while sending the email.");
            }
        }
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
    $("#submit").click(function () {
        sendEmail();
    });
});