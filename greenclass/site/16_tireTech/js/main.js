$('.navbar_gnb,.sub_shadow ').on('mouseover mouseout',function(e){
  
  if(e.type == 'mouseover'){
    $('.sub').stop().slideDown();
    $('.sub_shadow').stop().fadeIn();
  } else {
    $('.sub').stop().slideUp(200);
    $('.sub_shadow').stop().fadeOut(200);
  }
  
})