import products from "../../db.json" assert {type:'json'}
console.log(products)
const button = document.querySelector('button');
const asceBtn = document.querySelector('.ascending');  //오름차순버튼
const descBtn = document.querySelector('.descending');  //내림차순버튼

let myProduct;

//화면에 내용을 지우는 함수
const removeItems = () => {
    const items = document.querySelectorAll('li');
    items.forEach((item)=>{
        item.remove()
    })
}


const sortAsce = () => {    //오름차순(작은수->큰수)
    if(!myProduct){ return } // console 창에 오류가 안 뜨게 하기 위해 넣은 것
    const sortProducts = myProduct.sort((a, b)=>{
        return a.price-b.price;   //price를 비교 
    })
    //console.log('sortProducts? ',sortProducts)
    removeItems();  //화면li를 다 지움
    sortProducts.forEach((product)=>{ 
        createItem(product);
    })
}


const sortDesc = () => {    //내림차순(큰수->작은수)
    if(!myProduct){ return } // console 창에 오류가 안 뜨게 하기 위해 넣은 것
    const sortProducts = myProduct.sort((a, b)=>{
        return b.price-a.price;   
    })
    removeItems();  //화면li를 다 지움  
    sortProducts.forEach((product)=>{ 
        createItem(product);
    })
}


//li만들어서 ul에 넣어주는 함수
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


    li.append(img,p,span);
    ul.append(li);
}


//만든 li들이 반복되게
const importData = ()=>{
    myProduct = products.data;
    myProduct.map((product)=>{ 
        //계속 추가되는 것을 방지(동일한아이디값이 이미 있을때는 작동X)
        if(!document.getElementById(product.id)) {  
        createItem(product);
        }
    });
}

button.addEventListener('click', importData);
asceBtn.addEventListener('click', sortAsce);
descBtn.addEventListener('click', sortDesc);