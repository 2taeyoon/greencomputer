//import products from "https://mlmlmlml00700700700.github.io/data/db.json" assert {type:'json'}


let products;
let myProduct;  //products.data
let selected = [];  //체크된 아이템들을 저장할 배열

async function getJson(){
    const response = await fetch('https://mlmlmlml00700700700.github.io/data/db.json');
    products = await response.json();
    return products;
}

getJson()
.then((products)=>importData(products))

const button = document.querySelector('button');

//계산값을 화면에 보여주는 함수 정의
const printTotal = (price) => {
    const spanResult = document.querySelector('.total_price');
    
    const priceFommatted = new Intl.NumberFormat('ko-KR', { 
        style: 'currency',  //통화단위
        currency: 'KRW'     //원화
    }).format(price);    //포맷을 바꿀 데이터

    spanResult.innerText = priceFommatted; 
    }


//계산해주는 함수 정의
const calculate = () => {
        const result = selected.reduce((acc, current) =>{  //acc-총 합계, current-배열의 아이템
        return acc + current.price
    }, 0 )
  //console.log('result? ', result)

    printTotal(result);  //화면에 보여주는 함수 호출
}

//체크박스 체크하면 실행될 함수
const addCart = (event) => {
    //console.log(event.target.parentElement.id)
    const { id } = event.target.parentElement; //아이디(어떤 li를 선택했는지)
    const { checked } = event.target  //선택(true/false)
    // console.log( id, checked )

    if(checked){  //체크가 되었을 경우 ->배열에 추가
        myProduct.forEach(aa => {
        if(aa.id === parseInt(id)){    //문자열을 정수값으로 변환 ( == )
            selected.push(aa)
        }
        });
    } else {  //체크가 해제되면 ->selected배열에서 삭제
        selected = selected.filter((bb) => {
        return bb.id !== parseInt(id);
        })
    }

    calculate();  //계산해주는 함수 호출
}


//li만들어서 ul에 넣어주는 함수
const createItem = (product)=>{
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const span = document.createElement('span');
    const check = document.createElement('input');

    //각국에 맞는 숫자 서식을 지원하는 객체의 생성자
    const price = new Intl.NumberFormat('ko-KR', { 
        style: 'currency',  //통화단위
        currency: 'KRW'     //원화
    }).format(product.price);    //포맷을 바꿀 데이터


    img.setAttribute('src',product.img);
    li.id = product.id; 
    p.className = 'name';  //css
    p.innerHTML = product.name;
    span.className = 'price';
    span.innerText = price;

    //check(input)에 타입 추가,이벤트리스너 추가
    check.setAttribute('type','checkbox');
    check.addEventListener('change', addCart); //체크가 될때 addCart함수 실행


    li.append(check, img,p,span)
    ul.append(li)  
}

//만든 li들이 반복되게
const importData = ()=>{
    myProduct = products.data;
    myProduct.map((product)=>{ 
        //계속 추가되는 것을 방지(동일한아이디값이 이미 있을때는 작동X)
        if(!document.getElementById(product.id)) {  
        createItem(product);
        }
    })
}

//button.addEventListener('click', importData);