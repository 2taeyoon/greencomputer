$(function () { /* $(document).ready(function(){}) 축약 */
    $('main h1').animate({ 'font-size': 130, opacity: 1 }, 2000, 'linear');

    /*
        A.animate({속성}, 시간, easing)
            - 색상관련 속성은 ❌
            - easing : swing / linear
    */

    $('.banner a').click(function () {
        $('.banner').animate({ height: 0, opacity: 0 }, 500);
        //$('.banner').slideUp(500);
    })

});