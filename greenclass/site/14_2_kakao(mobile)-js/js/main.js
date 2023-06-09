const gnbBtn = document.querySelector('.gnbBtn');
const gnb_open = document.querySelector('.gnb_open');
const dark = document.querySelector('.dark');

const btn_subs = document.querySelectorAll('.btn_sub');
const btn_subArrows = document.querySelectorAll('.btn_sub span');
const list_sub_wraps = document.querySelectorAll('.list_sub_wrap');

//gnb가 왼쪽에서 튀어나옴
gnbBtn.addEventListener('click',()=>{
  gnb_open.style= `transform:translateX(0)`;
  dark.style.display = 'block';
})

//gnb가 왼쪽으로 들어감
dark.addEventListener('click',()=>{
  gnb_open.style= `transform:translateX(-100%)`;
  dark.style.display = 'none';
})

//gnb내부의 서브(여러개)
btn_subs.forEach(function(item,index){
  item.addEventListener('click',function(){
    btn_subArrows[index].classList.toggle('on')
    if(btn_subArrows[index].classList.contains('on')){
      list_sub_wraps[index].style.height = 'auto';
    } else {
      list_sub_wraps[index].style.height = '0';
    }
  })
})


