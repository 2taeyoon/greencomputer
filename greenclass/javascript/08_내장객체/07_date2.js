// 1초에 한번씩 시간(날짜포함 가능) 출력
setInterval(()=>{
  const now = new Date();
  console.log(now.toLocaleTimeString('ko-kr'));
},1000)