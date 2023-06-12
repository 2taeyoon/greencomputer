const items = document.querySelector('.items')   // <ul> 엘리먼트를 선택
const input = document.querySelector('.footer_input')  // 텍스트 입력 필드를 선택
const addBtn = document.querySelector('.footerAdd_Btn')  // 할일 추가 버튼을 선택
let products = []  // 사용자가 입력한 할일 목록을 저장할 빈 배열 생성

// 로컬 스토리지에 할일 목록을 저장하는 함수
const save = () => { // 로컬 스토리지는 문자열만(string) 데이터를 저장할 수 있기 때문에,
    // 객체(Object)나 배열(Array)과 같은 자바스크립트 데이터 타입을 그대로 저장할 수 없다
    // 이를 문자열(string) 형식으로 변환하기 위해서 JSON.stringify()를 사용한다.
    localStorage.setItem('products',JSON.stringify(products))
}

// 할일 추가 버튼을 눌렀을 때 실행될 함수
function onAdd(){  
    // 새로운 할일 객체 생성
    const product = {
        id:Date.now(),  // 유일한 id를 위해 현재 시간을 사용
        text:input.value  // 텍스트 입력 필드의 값을 할일 텍스트로 사용
    }
    // 할일 목록에 새로운 할일 추가
    products.push(product);  
    // 로컬 스토리지에 할일 목록 저장
    save(); 
    
    // 할일 텍스트 필드가 비어있으면 입력 포커스 유지
    if(product.text == ''){
        input.focus();
        return;    
    } 

    // 할일 목록에 새로 추가된 할일 아이템 생성
    createItem(product);  

    // 할일 텍스트 필드 초기화 및 포커스 설정
    input.value='';
    input.focus();
}


// 새로운 할일 아이템을 생성하는 함수
function createItem(product){
    const itemRow = document.createElement('li');  // <li> 엘리먼트 생성
    itemRow.setAttribute('class','item_row');  // 클래스 속성 설정
    itemRow.setAttribute('data-id',product.id);  // data-id 속성 설정


    itemRow.innerHTML = `  
        <div class="item">
        <span class="item_name">${product.text}</span>
        <button class="itemDelete_btn">
            <i class="fa-solid fa-trash-can" data-id=${product.id}></i>
        </button>
        </div>
        <div class="item_divider"></div>`;  // 할일 아이템 HTML 코드

    items.appendChild(itemRow)  // 할일 목록에 새로운 할일 아이템 추가

    itemRow.scrollIntoView();  // 새로 추가된 할일 아이템으로 스크롤
    return  items;  // 엘리먼트 배열 반환

}


// 스토리지에 이미 저장된 것이 있을 경우 화면에 출력해주는 함수
function init() {
    const userProducts = JSON.parse(localStorage.getItem('products'))

    // 로컬 스토리지에 할일 목록이 있으면, 각 할일을 UI에 추가하고 products 배열에 할일 추가
    if(userProducts) {
        userProducts.forEach(aa => createItem(aa))
        products = userProducts;
    }
}
init()


addBtn.addEventListener('click', onAdd);  // "Add" 버튼을 클릭했을 때 onAdd() 함수 실행
input.addEventListener('keypress', event => {  // 입력창에서 키가 눌릴 때마다 실행
    event.key === "Enter" && onAdd()  // 눌린 키가 "Enter"이면 onAdd() 함수 실행
});

input.addEventListener('focus', () => {  // 입력창에 포커스가 들어갔을 때 실행
    input.removeAttribute('placeholder')  // 입력창의 placeholder를 삭제함
});

items.addEventListener('click', (e) => {  // ul 태그에 클릭 이벤트 리스너 등록
    const idc = e.target.dataset.id;  // 클릭한 요소의 data-id 값을 가져옴
    if (idc) {  // data-id 값이 있으면 실행
        const toBeDeleted = document.querySelector(`.item_row[data-id="${idc}"]`);  // 해당 요소를 찾아서 변수에 저장
        toBeDeleted.remove();  // 해당 요소를 삭제
        products = products.filter((aa) => aa.id !== parseInt(idc));  // products 배열에서 해당 요소와 같은 id 값을 가진 객체를 제거
        save();  // 변경된 products 배열을 로컬 스토리지에 저장
    }
});