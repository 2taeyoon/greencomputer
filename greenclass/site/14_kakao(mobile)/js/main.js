//gnb가 왼쪽에서 튀어나옴
$('.gnbBtn').click(function(){
  $('.gnb_open').animate({left:0},300,'swing')
  //animate,transform 동시에 작동하지 ❌  
  $('.dark').fadeIn(300)
})

//gnb가 왼쪽으로 들어감
$('.dark').click(function(){
  $('.gnb_open').animate({left:'-100%'},150,'swing');
  $('.dark').fadeOut(150)
})

//gnb내부의 서브
$('.btn_sub').on('click',function(){
  $(this).siblings('.list_sub_wrap').slideToggle(300);
  $(this).find('span').toggleClass('on');
})
