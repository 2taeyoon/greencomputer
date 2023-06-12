var menuItem = $('nav > ul > li> a');
console.log(menuItem)

/*문서 내에서 부드럽게 이동(버튼의 href값을 각 섹션의 id와 동일하게 했을때)
menuItem.click(function(){
    var targetId = $(this).attr('href');  
    var targetIdT = $(targetId).offset().top;
    $('html,body').animate({scrollTop:targetIdT},500);
})*/

menuItem.click(function(){
    var targetSection = $(this).attr('data-target');  
    var targetST = $(targetSection).offset();
    $('html,body').animate({scrollTop:targetST.top},500);
});





//스크롤 되면 헤더 모양이 바뀜
const header = document.querySelector('header')

window.addEventListener('scroll', function(){
    header.classList.add('on');
    if (window.scrollY == 0 ){ 
        header.classList.remove('on');
    }
});



