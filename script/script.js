/* eslint-disable */

$(function () {

    setInterval(fnSlide, 3000);

    function fnSlide() {
        $("#shuttleFrame").animate({
                "margin-left": "-1200px"
            },
            1000,
            "swing",
            function () {
                $("#shuttleFrame a:first-child").insertAfter("#shuttleFrame a:last-child");
                $("#shuttleFrame").css({
                    "margin-left": "0"
                });
            });
    }


});
