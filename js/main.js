$(function(){
    $('.links li ').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
    $('.fixedmenu .gear').click (function(){
        $(this).parent('.fixedmenu').toggleClass('is-visible');
        if($(this).parent('.fixedmenu').hasClass('is-visible')){
            $(this).parent('.fixedmenu').animate({
             right:0
            },500);

        }
        else{
            $(this).parent('.fixedmenu').animate({
                right:'-540px'
               },500);
        }
    })
    $(window).scroll(function(){
        if($(this).scrollTop() > 0){
            $('.whenscroll').addClass('scrolltop')
        }
        else{

            $('.whenscroll').removeClass('scrolltop')
        }
    })
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

})