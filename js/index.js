$(".menu-icon i").click(function () {
    $(".menu").css("transform", "translateX(0%)")
})
$(".close i").click(function () {
    $(".menu").css("transform", "translateX(100%)")
})

$(window).scroll(function () {
    let height = $(window).scrollTop();
    if (height > 500) {
        $(".scroll-icon").css("display", "block")
    }
    else {
        $(".scroll-icon").css("display", "none")
    }
})

$(".scroll-icon").click(function () {
    $(window).scrollTop(0);
})