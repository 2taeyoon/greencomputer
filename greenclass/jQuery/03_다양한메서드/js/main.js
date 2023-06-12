// method1
$('.method1 button:nth-child(1)').click(function () {
    $('.method1 div').show(500);
})

$('.method1 button:nth-child(2)').click(function () {
    $('.method1 div').hide(500);
})
// A.show(시간) - A가 나타남 (시간 1000 = 1초)

// method2
$('.method2 button').click(function () {
    // $('.method2 div').toggle(500);
    $(this).next().toggle();
})
/*
    A.next()    - A의 다음 요소
    A.nextAll() - A의 다음 요소들 모두
    A.prev()    - A의 이전 요소
    A.prevAll() - A의 이전 요소들 모두

    A.toggle()  - A가 보였다 안 보였다 반복
*/

$('.method3 button:nth-child(1)').click(function () {
    $(this).parent().find('div').fadeIn(1000);
    // $('.method3 div').fadeIn(1000);
});

$('.method3 button:nth-child(2)').click(function () {
    $(this).parent('li').children('div').fadeOut(1000, alert('사라짐'));
    // $('.method3 div').fadeOut(1000);
});

$('.method4 button').click(function () {
    $(this).siblings('div').fadeToggle(500);
});

$('.method5 button:nth-child(1)').click(function () {
    $('.method5 div').slideUp(1000);
});

$('.method5 button:nth-child(2)').click(function () {
    $('.method5 div').slideDown(100);
});

$('.method6').find('button').click(function () {
    $('.method6 div').has('p').slideToggle(500);
});

/*
    A.fadeIn(시간, 콜백함수)
    A.fadeOut()      - A가 시간을 두고 사라짐(기본-0.4s)
    A.fadeToggle()   - fadeIn, fadeOut 반복
    A.slideUp()      - A가 슬라이드로 사라짐
    A.slideDown()    - A가 슬라이드로 나타남
    A..slideToggle() - slideUp, slideOut 반복

    A.parent()     - A의 바로 하나 위의 부모요소 선택
    A.parent(B)    - A의 위의 조상 요소들 중 B선택
    A.children()   - A의 자식 요소 선택
    A.find(B)      - A의 후손(하위) 요소들 중 B선택
    A.siblings(B)  - A의 형제 요소중 B선택
    A.has(B)       - A중에서 B를 포함하고 있는 요소를 선택
*/

function upDown() {
    $('.method7 div').slideToggle(2000, upDown);
}

upDown();

$('.method7 button').click(function () {
    $('.method7 div').stop();
});

$('.method8 button:nth-child(1)').click(function () {
    $('.method8 div').width(800).height('800px');
});

$('.method8 button:nth-child(2)').click(function () {
    $('.method8 div').width('').height('');
});