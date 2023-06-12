import products from "../../db.json" assert {type:'json'}
//assert {type:'json'} -외부파일이 json이라고 확실하게 명시
console.log(products)

const button = document.querySelector('button');

//li만들어서 ul에 넣어주는 함수
const createItem = (product)=>{
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const span = document.createElement('span');

    const price = new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(product.price);

    img.setAttribute('src', product.img);
    li.id = product.id;
    p.className = 'name';
    p.innerHTML = product.name;
    span.className = 'price';
    span.innerHTML = price;

    li.append(img, p, span);
    ul.append(li);

}

//만든 li들이 반복되게
const importData = ()=>{
    products.data.map((product)=>{ // json 파일의 data를 가져오는 것. map 메소드를 이용하여 새로운 배열로 반환
        if(!document.getElementById(product.id)){
            createItem(product);
        }
    });
}

button.addEventListener('click', importData);