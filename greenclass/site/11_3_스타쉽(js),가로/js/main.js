//javascript
document.querySelector('.btn_closeBanner').onclick = function(){
  document.querySelector('#top_banner').style.height   = '0px';
}
const menus = document.querySelectorAll('.gnb > li');
const sub = document.querySelectorAll('.sub');

menus.forEach(function(menu){
  menu.onmouseover = function(){
    menu.children[1].style.height = '40px' 
  }
  menu.onmouseout = function(){
    menu.children[1].style.height = '0px' 
  }
})


// $('.btn_closeBanner').click(function(){
//   $('#top_banner').slideUp(500,'swing')
// })

// $('.gnb > li').mouseenter(function(){
//   $(this).find('.sub').stop().slideDown(500);
// })
//   .mouseleave(function(){
//     $(this).find('.sub').stop().slideUp(200);
// })