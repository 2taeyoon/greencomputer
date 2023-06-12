$('.tabBody > div:gt(0)').hide(); // div의 0번째 보다 큰 div를 안보이게

$('.tabMenu li').click(function(){
    let num = $(this).index();      // 몇번째 li를 클릭했는지 알아옴

    $('.tabMenu li').removeClass('active') // 3개의 li 전부의 클라스 active 제거
    $(this).addClass('active');            // 클릭한 바로 그 li에 클라스 추가

    $('.tabBody > div').hide();
    $('.tabBody > div').eq(num).show();
});

/*
    A.index()   -   A가 몇번째 순서인지 알아온다(0부터 시작)

    ##제이쿼리 필터 셀렉터(메소드로도 사용)

    -A:gt(b)    -   A의 b보다 큰 순서의 A들(0부터 시작)
    -A:lt(b)    -   A의 b보다 작은 순서의 A들(0부터 시작)
    -A:eq(b)    -   b와 같은 순서의 A
    -A:last     -   A요소들 중 마지막 요소
    -A:first    -   A요소들 중 첫번째 요소
    -A.has(B)   -   B요소를 포함하고 있는 A
    -A.not(B)   -   B요소를 포함하고 있지 않은 A

    -A.eq(b)    -   b번째 A
*/