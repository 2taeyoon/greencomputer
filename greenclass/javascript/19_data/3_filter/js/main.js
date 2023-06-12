//import products from "https://mlmlmlml00700700700.github.io/data/db.json" assert {type:'json'}
import products from "../../db.json" assert {type:'json'}
console.log(products)

const button = document.querySelector('button');
const select = document.querySelector('select');
let myProduct; 


const selectCategory = (event) => {
  //console.log(event) //target  ... options selectedIndex -어떤 옵션선택했는지 알 수 있음
  //console.log(event.target.options.selectedIndex)
  //const aa = event.target.options.selectedIndex;  
  const { selectedIndex } = event.target.options; // 구조분해해서 가져옴
  //console.log(event.target.options[n]);
  const {value} = event.target.options[selectedIndex]   //n번째 value 값(value만 됨)
  //console.log(value)

  const filterd = myProduct.filter((aa)=>{
    return aa.category === value;
  })  
  removeItem()   //li(화면에보이는 아이템들) 삭제 함수 작동

  filterd.forEach((product)=>{  
    createItem(product);     
  })
}




//li(화면에보이는 아이템들) 삭제 함수
const removeItem = () =>{
  const items = document.querySelectorAll('.items li');
  items.forEach((items) => {
    items.remove();
  })

}

const createItem = (product)=>{
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  const img = document.createElement('img');
  const p = document.createElement('p');
  const span = document.createElement('span');

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


  li.append(img,p,span)
  ul.append(li)  
}

//만든 li들이 반복되게
const importData = ()=>{
  select.selectedIndex = 0;
  myProduct = products.data;
  myProduct.map((product)=>{ 
    //계속 추가되는 것을 방지(동일한아이디값이 이미 있을때는 작동X)
    if(!document.getElementById(product.id)) {  
    createItem(product);  
    }
  })
}

button.addEventListener('click', importData);
select.addEventListener('change', selectCategory);