var elImg = $('main img').attr('src');  // 이미지의 src의 value (이미지의 주소)

$('.popup').hide(); //팝업창 안보이는 상태 시작

var Btn1 = $('.btn1').click(function(){
    $('main img').attr({'src' : 'img/img01.png', 'alt' : '궁전01' });
    $('main img').removeAttr('title');
});

var Btn2 = $('.btn2').click(function(){
    $('main img').attr({'src' : 'img/img02.png', 'alt' : '궁전02', 'title' : '새로운속성' });
});

$('.btn3').click(function(){
    $('.popup').fadeIn(1000); 
})

$('.popup button').click(function(){
    $('.popup').fadeOut(200);
})

    /*
        A.attr(속성명)              -A요소의 속성값을 가져옴
        A.attr({속성명:속성값})     -A요소의 속성을 제어/추가
        A.removeAttr(속성명)        -A요소에 있는 속성을 제거
    */