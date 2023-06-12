/* jQuery
$('.btn_closeBanner').click(function(){
  $('#top_banner').slideUp(500,'swing')
})


$('.gnb > li').mouseenter(function(){
  $('.gnbSubBox').stop().slideDown(500);
})
$('#gnb_wrap').mouseleave(function(){
    $('.gnbSubBox').stop().slideUp(200);
})
*/

/*javascript*/
document.querySelector('.btn_closeBanner').onclick = function(){
  document.querySelector('#top_banner').style.height   = '0px';
}

const menus = document.querySelectorAll('.gnb > li > a');
const subBox = document.querySelector('.gnbSubBox');
const navAll = document.querySelector('#gnb_wrap');

menus.forEach(function(menu){
  menu.onmouseenter = function(){
    console.log('이히히히히')
    subBox.style.height = '240px' 
  }
  navAll.onmouseleave = function(){
    subBox.style.height = '0px' 
  }
})


