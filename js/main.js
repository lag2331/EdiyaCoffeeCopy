$(document).ready(function(){

    console.log($(".in_up").scrollTop());

    const navbarHeight = $('.top_nav').height();
    const in_upScrollTop = $(".in_up").scrollTop();
    $(window).scroll(function(){
        if(window.scrollY > navbarHeight) {
            $('.top_nav').addClass('top_nav-dark');
        }else{
            $('.top_nav').removeClass('top_nav-dark');
        }

        if(window.scrollY > 2500 ){
            console.log($('.main_block2_con'));
            console.log(window.scrollY);
            console.log(in_upScrollTop);
            $(".in_up").addClass('appear');
        }
    });

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