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

//슬라이더 slick 플러그인
$('.slides').slick({
  dots: true,               //페이지버튼
  speed: 500,               //이미지 전환 속도
  autoplay: true,           //자동슬라이드(기본false)
  autoplaySpeed: 1000,      //인터벌 시간
  //fade: true,             //투명도로 전환
  arrows:true,             //화살표(기본true)
  infinite:true,          
  //무한반복여부,같은 방향으로 쭉 진행하는게 아니라 갔다왔다(기본true)
  initialSlide:2,            //처음 시작하는 이미지(0부터)
  pauseOnFocus:true,         //이미지를 클릭하면 멈춤(기본true)
  pauseOnHover:true,         //이미지위 마우스를 올려놓으면 멈춤(기본true)
  swipe:true,                //이미지를 밀어서 움직임(기본true)
  //vertical:true              //슬라이드 방향이 위로로 감  
});


