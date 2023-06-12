$(function () { /* $(document).ready(function(){}) 축약 */
    $('.banner a').click(function () {
        $('.banner').animate({ height: 0, opacity: 0 }, 500);
        //$('.banner').slideUp(500);
    });

    $('.b1').mouseover(function () {
        $(this).animate({ marginLeft: 1000, marginTop: 500 }, 1000, 'swing', function () {
            $(this).animate({ marginLeft: 50, marginTop: 0 }, 500, 'swing');
        });
    });

    $('.b2').mouseover(function () {
        $(this).animate({ marginLeft: '+=100px' }, 300, 'swing');
    })
        .click(function () {
            $(this).animate({ marginLeft: '50px' }, 100, 'swing');
        });
    // 매서드 체인 - 선택자가 같을 경우에 마침표 연산자를 이용해서 연결
});

/*
    A.animate({속성}, 시간, easing, 콜백함수)
        - 색상관련 속성은 ❌
        - easing : swing / linear
*/