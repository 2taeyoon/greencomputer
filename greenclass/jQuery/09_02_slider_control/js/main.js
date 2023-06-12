$(function(){
    const imgWidth = $('#slider img').width();  //css가 적용된 이후의 크기
    const imgNember = $('#slider img').length;  //이미지의 갯수
    const sliderUl = $('#slider>ul');

    sliderUl.css({width:imgWidth*imgNember})

    console.log(`이미지 각각의 길이는? ${imgWidth} / 이미지들의 갯수는? ${imgNember} / ul의 길이는? ${imgWidth*imgNember}`)


    const right = function(){
        sliderUl.animate({'margin-left':-imgWidth},300, 'swing', function(){
            sliderUl.css({'margin-left':0})
            sliderUl.find('li:first-child').insertAfter(sliderUl.find('li:last-child')); 
        });
}
    const left = function(){
        sliderUl.find('li:last-child').insertBefore(sliderUl.find('li:first-child'));
        sliderUl.css({'margin-left':-imgWidth});
        sliderUl.animate({'margin-left':0},300); 
}



    $('.next').click(right);   //next버튼을 클릭하면 함수 right 호출
    $('.prev').click(left);


    $('.play').click(function(){
        intervalId = setInterval(right,1000);
        console.log(intervalId);
    });

    $('.stop').click(function(){
        clearInterval(intervalId);
    });

    

    // setInterval의 리턴값(숫자)을 clearInterval의 인자로 넣어주면 멈추게 된다.


/*
    슬라이더 -방향, 왼쪽 오른쪽
    setInterval(function(){
        sliderUl.find('li:last-child').insertBefore(sliderUl.find('li:first-child'));
        sliderUl.css({'margin-left':-imgWidth});
        sliderUl.animate({'margin-left':0},800);
         //sliderUl.animate({'margin-left':imgWidth},300); 
    },1000);
*/

/*
    // 슬라이더 방향, 오른쪽에서 왼쪽
    // setInterval(function(){
    //     sliderUl.animate({'margin-left':-imgWidth},300, 'swing', function(){
    //         sliderUl.css({'margin-left':0},300);
    //         sliderUl.find('li:first-child').insertAfter(sliderUl.find('li:last-child'));
    //     });
    // },1000);
*/

});

/*
    setInterval(실행구,시간)    - 일정한 시간마다 자동으로 실행
    A.insertBefore.B            - A를 B 앞에 가져다 놓는다
    A.insertAfter.B            - A를 B 뒤에 가져다 놓는다
*/