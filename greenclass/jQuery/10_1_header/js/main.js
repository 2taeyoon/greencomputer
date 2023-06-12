/* jQuery 스크롤이 되기만 하면 무조건 실행
$(window).scroll(function(){
  $('header').addClass('on')

  if($(window).scrollTop() == 0){
    $('header').removeClass('on')
  }
})
//$(window).scrollTop()  - 화면의 스크롤이 얼마나 되었는지 가져오거나 만들어준 (매소드)
*/

const header = document.querySelector('header')

/*js 스크롤이 되기만 하면 무조건 실행
window.addEventListener('scroll', function(){
  header.classList.add('on');

  if(window.scrollY == 0){
    header.classList.remove('on');
  }
})
*/

//js 300만큼 스크롤이 되면 실행
window.addEventListener('scroll', function(){
  console.log('section.offsetTo', section.offsetTop)
  if (window.scrollY > section.offsetTop){  //아이디section이 있는 곳에서 바뀜
    header.classList.add('on');
  }
  else {
    header.classList.remove('on');
  }
})

