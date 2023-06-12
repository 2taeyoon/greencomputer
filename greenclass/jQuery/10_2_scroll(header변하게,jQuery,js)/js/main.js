//* jQuery
const headerTop = $('header').offset().top + $('header').height();
console.log(headerTop)

$(window).scroll(function(){
    let scroll = $(window).scrollTop()  

    if(scroll >headerTop){
        $('.sticker').slideDown(500)
    } else {
        $('.sticker').slideUp(200)
    }    
})
/*
    jQuery
    A.offset().top    -A가 브라우저 제일 위에서 부터 얼마 떨어져있는
    $(window).scrollTop()  - 화면의 스크롤이 얼마나 되었는지 가져오거나 만들어준 (매소드)
*/



