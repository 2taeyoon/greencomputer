const sildes = document.querySelector('#slider>ul'); //ul 슬라이드 컨테이너
const sildeImg = document.querySelectorAll('#slider>ul li'); //슬라이드들
const imgWidth = sildeImg[0].children[0].offsetWidth; //이미지 가로길이(css적용 후)
const slideCount =  sildeImg.length;  //슬라이드 개수
const prevBtn = document.querySelector('.prev');  //이전버튼
const nextBtn = document.querySelector('.next');  //다음버튼
const playBtn = document.querySelector('.play');  //play버튼
const stopBtn = document.querySelector('.stop');  //stop버튼

const dots = document.querySelector('.dots');  

sildes.style.width = `${imgWidth*(slideCount+2)}px` //양 옆에 복사해 넣을 것도 고려


let currentIdx = 0;   //현재 슬라이드 index 
let speed = 0.5;      //속도 지정 

function makeClone(){
    let clone_first = sildeImg[0].cloneNode(true);
    let clone_last = sildes.lastElementChild.cloneNode(true);
    sildes.append(clone_first);
    //sildes.prepend(clone_last);
    sildes.firstElementChild.before(clone_last);
}
function initFunction() {
    sildes.style.width = `${imgWidth*(slideCount+2)}px`
    sildes.style.left = `-${imgWidth}px`
}


function next(){  
    if(currentIdx <= slideCount -1) {   //마지막 슬라이더일때 까지만
        sildes.style.left = `-${(currentIdx + 2) *imgWidth}px` 
        //처음상태부터 1만큼 왼쪽 가있는 상태에서 시작
        sildes.style.transition = `${speed}s ease-out`;  
    } 
    if(currentIdx === slideCount -1 ){    //마지막 슬라이더일때
        setTimeout(function(){
            sildes.style.left = `-${imgWidth}px`
            console.log('마지막!!!!!!!!! ',currentIdx);
            sildes.style.transition = `${0}s ease-out`;       
        },500);
        currentIdx = -1;    
    }
    currentIdx += 1;      
    console.log('currentIdx는? ',currentIdx);
}
function prev(){ 
    if(currentIdx >= 0 ){   
        sildes.style.left = `-${currentIdx * imgWidth}px`;
        sildes.style.transition = `${speed}s ease-out`;
    }
    if(currentIdx === 0 ){
        setTimeout(function(){
            sildes.style.left = `-${slideCount * imgWidth}px`;
            sildes.style.transition = `${0}s ease-out`;
        },500);
        currentIdx = slideCount; 
    }
    currentIdx -=1;
    console.log('currentIdx는? ',currentIdx);
}

makeClone();  //이미지들을 복사해서 앞, 뒤에 붙여넣는 함수
initFunction(); //초기화해주는 함수

nextBtn.addEventListener('click', next);
prevBtn.addEventListener('click', prev);
playBtn.addEventListener('click', function(){
    intervalId = setInterval(next,1000);
});
stopBtn.addEventListener('click', function(){
    clearInterval(intervalId);
});


//Dots만들기
for(let i = 0; i < slideCount; i++){
    let newBtn = document.createElement('button');
    newBtn.append(i+1);
    dots.append(newBtn);
}
const dotBtns = document.querySelectorAll('.dots > button')
dotBtns.forEach(function(dot,dotNumber){
    dot.onclick = function(){
        console.log('dot클릭!!!', dotNumber);
        sildes.style.left = `-${(dotNumber + 1) *imgWidth}px` 
        currentIdx = dotNumber;
    }
});
/*
    A.cloneNode(true)   -A를 통채로 복사
    A.lastElementChild  -부모A 자식중에 마지막 노드(비요소(엔터, 공백...) 포함X, lastChild와 차이)
*/