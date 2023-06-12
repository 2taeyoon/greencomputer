const canvas = document.querySelector('canvas');
const size = document.querySelector('#size');  
const color = document.querySelector('#color');   
const clear = document.querySelector('.clear');   
const save = document.querySelector('.save');   

const ctx = canvas.getContext('2d');  //2d그림을 그릴 수 있는 오브젝트를 만들어준다


let isPainting = false;   //그림그리는 중인지 아닌지
let lineSize = 5; //라인 두께. 5로 시작

ctx.fillStyle = 'white';  
ctx.fillRect(0,0,canvas.width, canvas.height)
//컨텍스트 배경색 넣기(2줄 다 필요) 

//save. 이미지로 저장
save.addEventListener('click', ()=>{
    canvas.toBlob((blob)=>{
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'drawing.jpg'    //저장할 파일 이름 설정(png투명으로도 가능, 배경색 설정 안했을때)
        console.log(a);
        a.click()
})
    //toBlob()  -파일을 저장하는 매소드
    //URL.createObjectURL(blob)  - blob(바꿔도됨)파일의 URL주소를 만들어줌
})


//clear
clear.addEventListener('click', ()=>{
    ctx.clearRect(0,0,canvas.width, canvas.height)
        //(시작위치x,y, 지울크기가로,세로)
})

//선 굵기 적용
size.addEventListener('change', (event)=>{
    //console.log(event.target.value); //선택한 숫자
    lineSize = event.target.value;
})

//색상 적용
color.addEventListener('change', (event)=>{
    //console.log(event.target.value);  //hex값이 나옴
    ctx.strokeStyle = event.target.value;
})

canvas.addEventListener('mousedown',(event)=>{
    //console.log(event); 
    isPainting = true;    //그림 그리는 중
    ctx.beginPath(); //새로운 경로 생성, 그리기 시작했어!
    ctx.moveTo(event.offsetX, event.offsetY)
})

canvas.addEventListener('mousemove',(event)=>{
    if(!isPainting){  //마우스를 누르지 않았을때는 작동X
        return
    }

    ctx.lineWidth = lineSize;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';   //선꺽이는 스타일

    ctx.lineTo(event.offsetX, event.offsetY);   //선을 그림
    ctx.stroke()  //윤곽선을 렌러링

})

canvas.addEventListener('mouseup',(event)=>{
    isPainting = false; //그리기 끝
})

//마우스가 화면 밖으로 벗어나면 멈춰지게
canvas.addEventListener('mouseout', (event)=>{
    isPainting = false; //그리기 끝
})
