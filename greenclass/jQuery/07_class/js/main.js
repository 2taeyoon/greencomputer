$(function(){

    $('.method1 button:nth-of-type(1)').click(function(){
        $('.method1 .box').addClass('red');
        $('.method1 .box').addClass('orange');
    })

    $('.method1 button:nth-of-type(2)').click(function(){
        $('.method1 .box').removeClass('red');
    })

    $('.method1 button:nth-of-type(3)').click(function(){
        $('.method1 .box').removeClass();
    })



    $('.method2 button').click(function(){
        $('.method2 .box').toggleClass('red border');
    })


    var $box3 = $('.method3 .box');
    $('.method3 button:nth-of-type(1)').click(function(){
        $box3.toggleClass('orange');
    })
    
    $('.method3 button:nth-of-type(2)').click(function(){
        $box3.toggleClass('border');
    })

    $('.method3 button:nth-of-type(3)').click(function(){
        if($box3.hasClass('orange')){
            $box3.addClass('border');
        } else if ($box3.hasClass('border')){
            $box3.addClass('orange');
        } else {
            $box3.html('<b>적용된 클라스가 없어요</b>')
        }
    })

    $('.method3 button:nth-of-type(4)').click(function(){
        $box3.removeClass('orange border').html('');
    })
/*
    A.addClass(B)       - A에 클라스 B추가
    A.addClass('A B C') - A에 A, B, C클라스 추가
    A.removeClass(B)    - A에 클라스 B제거
    A.removeClass()     - A에 적용된 모든 클라스
*/

})