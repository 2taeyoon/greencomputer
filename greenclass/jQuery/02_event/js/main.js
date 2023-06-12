// 화면이 로딩되면 작동
$(document).ready(function(){
    $('h2').css( { 'color': 'skyblue', 'font-size': '30px', 'margin-bottom': '30px', 'text-shadow': '2px 2px 5px rgba(0,0,0,.7)', textAlign:'center' } );
    $('.txt > p:nth-of-type(2)').css( { color:'gold' } );
    $('.txt > p').css( { 'margin-bottom':'50px' } );
    $('.txt').css( { width:'900px', margin:'50px auto' } );

    // 마우스 이벤트
    // $('선택자).on('이벤트', 함수 실행구)
    $('a').on('mouseenter', function(){
        $(this).css( { color: 'red', 'text-decoration': 'underline' } );
    });
    $('a').on('mouseleave', function(){
        $(this).css( { color: '', 'text-decoration': '' } );
    });
    $('h1').on('click', function(){
        // $('header').css('background', 'skyblue');
        document.querySelector('header').style.background = 'skyblue';
    });

    $('h2').on('click mouseleave', function(){
        $('footer').css( { background: 'gold' } );
    });

    // mouseenter와 mouseover의 차이
    $('.enter').on('mouseenter',function(){
        $('.enter p').css('background', 'pink')
    });
    $('.enter').on('mouseleave',function(){
        $('.enter p').css('border', '5px solid red')
    });

    $('.over p').on('mouseover',function(){
        $('.over p').css('background', 'pink')
    });
    $('.over p').on('mouseout',function(){
        $('.over p').css('border', '5px solid red')
    });
})