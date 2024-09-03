$(document).ready(function(){
    $(".menu-bars").click(function(){
        $(".slider-menu").toggleClass("slideMenu")
    })

    $('.couter01').counterUp({
        delay:11,
        time:1000
    })
    $('.couter02').counterUp({
        delay:8,
        time:1000
    })
    $('.couter03').counterUp({
        delay:13,
        time:1000
    })
    $('.couter04').counterUp({
        delay:6,
        time:1000
    })
    // $('.countpersen').counterUp({
    //     delay:6,
    //     time:1000
    // })


    $(".team-image-content").owlCarousel({
        items:4,
        loop:true,
        autoplay:true,
    })
    $(".company-name").owlCarousel({
        items:6,
        loop:true,
        autoplay:true,
        center:true,
        nav:true,
        dots:true,
    })
})