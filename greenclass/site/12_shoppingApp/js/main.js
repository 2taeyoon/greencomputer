const items = document.querySelector('.items')   //ul
const input = document.querySelector('.footer_input')  
const addBtn = document.querySelector('.footerAdd_Btn')  

//클릭하면 발생할 함수 정의
function onAdd(){
    //1.input 입력값 가져오기
    const text = input.value;

    //2.새로운 아이템을 만듦 (li.item_row)
    const item = createItem(text);   //createItem실행

    //3.ul.items에 만든 아이템 추가
    items.appendChild(item)
    console.log('items???? ',items)

    //4.input 초기화
    input.value='';
    input.focus();
}

//li.item_row를 만들어주는 함수
function createItem(text){  // input의 입력값을 가져온 text를 매개변수로 사용
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class','item_row');

    const item = document.createElement('div');
    item.setAttribute('class','item');

    const name = document.createElement('span');
    name.setAttribute('class','item_name')
    name.innerText = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('itemDelete_btn');
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>'; // 자식요소로 생성

    // const deleteBtnI = document.createElement('i'); // innerHTML 대신 자식요소로 생성해서 사용한 것
    // deleteBtnI.setAttribute('class','fa-solid fa-trash-can');

    deleteBtn.addEventListener('click', function(){
        items.removeChild(itemRow); // items(ul)의 자식요소인 itemRow(li)를 제거하겠다
    });

    const itemDivider = document.createElement('div');
    itemDivider.classList.add('item_divider');
    
    item.append(name);
    item.append(deleteBtn);
    // deleteBtn.append(deleteBtnI); // 자식요소로 생성한 것
    itemRow.append(item);
    itemRow.append(itemDivider);

    return itemRow;  
    //최종적으로 만들어준 itemRow를 리턴해줌  
}
// createItem(); // consol.log로 확인하기 위한 용도


addBtn.addEventListener('click', onAdd);
