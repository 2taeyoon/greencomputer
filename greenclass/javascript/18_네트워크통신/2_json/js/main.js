const xht = new XMLHttpRequest();
//외부데이터를 불러들이는 객체, 서버에 데이터를 요청하기 위한 객체

xht.open('get','data.html')  //준비
xht.send(null)  //요청을 전송

xht.onload = function(){  //
    if( xht.status == 200 ){ // 서버응답이 정상일 때만 작동
        console.log('xht.responseText는?',xht.responseText);
        respObj = JSON.parse(xht.responseText); // JSON 문자열을 객체로 생성
        console.log('respObj는?',xht.responseText);
    } 
}

/*
    XMLHttpRequest()
    .open('get/post','주소',true/false)  
        - 어떤자료 가져올지/보낼지 지정, true-비동기/false-동기
    .send()   -서버로 요청 전송
    .status  -서버에서 받은 응답 상태(정상코드:200/ 클라이언트오류:4XX / 서버오류:5XX)
    .responseText - 서버로부터 받은 응답 내용 (문자열)

    JSON.parse(xht.responseText); // JSON 문자열을 객체로 생성
*/

