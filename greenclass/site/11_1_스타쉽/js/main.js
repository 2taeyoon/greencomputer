//jQuery
$('.btn_closeBanner').click(function(){
  $('#top_banner').slideUp(500,'swing')
})


$('.gnb > li').mouseenter(function(){
  $(this).find('.sub').stop().slideDown(500);
})
  .mouseleave(function(){
    $(this).find('.sub').stop().slideUp(200);
  })