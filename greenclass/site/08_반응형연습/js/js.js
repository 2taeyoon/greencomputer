const allBtn = document.querySelector('.btn_all');
const nav = document.querySelector('nav');
const closeBtn = document.querySelector('.close');

allBtn.addEventListener('click', function(){
  nav.style.left = '0';
});

closeBtn.addEventListener('click', function(){
  nav.style.left = '-100%';
});

window.addEventListener('resize', function(){
  if (nav.hasAttribute('style') && this.window.innerWidth > 760 ) {
    // nav가 style을 가지고 있을 때 and 윈도우가 width가 760보다 커졌을 때
    nav.removeAttribute('style'); // nav의 style을 제거한다
  }
})


// target.addEventListener(type, listener [, options]);
// target: 이벤트를 처리할 대상 요소
// type: 처리할 이벤트 유형 (예: click, keydown, resize 등)
// listener: 이벤트가 발생했을 때 실행할 함수 (이벤트 핸들러)
// options: 이벤트 핸들러의 동작 옵션 (선택적)