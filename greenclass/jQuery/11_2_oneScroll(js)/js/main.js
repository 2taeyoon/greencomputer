const menuItem = document.querySelectorAll('nav > ul > li > a');

/*문서 내에서 부드럽게 이동(버튼의 href값을 각 섹션의 id와 동일하게 했을때)
menuItem.click(function(){
    var targetId = $(this).attr('href');  
    var targetIdT = $(targetId).offset().top;
    $('html,body').animate({scrollTop:targetIdT},500)
})*/


// 헤더 버튼
menuItem.forEach((aa,bb) => {
    aa.onclick = e => {
        e.preventDefault();
        console.log('클릭');
        document.querySelector(`#s${bb+1}`).scrollIntoView({behavior: 'smooth'});
    }
});

// v 아래 버튼
for(let i = 1; i <= 6; i++){
    document.querySelector(`#s${i} .btnDown`).onclick = e => {
        document.querySelector(`#s${i+1}`).scrollIntoView({behavior: 'smooth'});
        document.querySelector(`#s${i[i.length-1]}`).scrollIntoView({behavior: 'smooth'});
    };
}

