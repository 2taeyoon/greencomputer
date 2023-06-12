const xht = new XMLHttpRequest();
//외부데이터를 불러들이는 객체, 서버에 데이터를 요청하기 위한 객체

xht.open('get','data.html')  //준비
xht.send()  //요청을 전송

xht.onload = function(){  //
  if( xht.status == 200){
    document.querySelector('#content').innerHTML = xht.responseText;
    //서버응답 데이타
  } 
}

/*
  XMLHttpRequest()
  .open('get/post','주소',true/false)  
    - 어떤자료 가져올지/보낼지 지정, true-비동기/false-동기
  .send()   -서버로 요청 전송
  .status  -서버에서 받은 응답 상태(정상코드:200/ 클라이언트오류:4XX / 서버오류:5XX)
  .responseText - 서버로부터 받은 응답 내용 (문자열)

*/

