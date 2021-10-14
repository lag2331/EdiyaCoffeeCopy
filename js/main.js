$(document).ready(function(){
     $('.visual_slide').bxSlider({
        auto: true,
        speed: 1500,
        pause: 3500,
        pager:false,
        controls: false,
        infiniteLoop: true,
    });

    $('.beanist_slide').bxSlider({
        auto: true,
        speed: 1000,
        pause: 3000,
        pager:false,
        controls: false,
        infiniteLoop: true,
    });

    // $('.top_nav2').click(function(){
    //     $('.top_nav2_sub').css(
    //         "opacity","1",
    //         "visibility","visible",
    //         "z-index","9999"
    //     );
    // });

    // $(".in_up").on("mouseover", function(){
    //     $("#testDiv1").fadeIn();
    // });

    var isVisible = false;

    $(window).on('scroll',function() {
        if (checkVisible($('.in_up'))&&!isVisible) {
            $("#in_up").fadeOut();
            isVisible=true;
        }
    });

    function checkVisible( elm, eval ) {
        eval = eval || "object visible";
        var viewportHeight = $(window).height(), // Viewport Height
            scrolltop = $(window).scrollTop(), // Scroll Top
            y = $(elm).offset().top,
            elementHeight = $(elm).height();   
        
        if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
        if (eval == "above") return ((y < (viewportHeight + scrolltop)));
    }

    $(document).on('mouseover', '.drop_menu span', function() {
        $('.sub').slideDown(300);
        $('.sub_bg').slideDown(300);
    });
    $(document).on('mouseover', 'div', function () {
        if (!$(this).hasClass('drop_menu')) {
            $('.sub').slideUp(300);
            $('.sub_bg').slideUp(300);
        }
    });

});