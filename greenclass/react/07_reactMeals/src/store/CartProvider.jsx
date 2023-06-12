// 이 컴포넌트는 cartContext 데이터를 관리하고 그 컨텍스트를 접근하려는 모든 컴포넌트에 제공하는 일을 함
// reducer 관련 내용도 여기에(상태를 모아서 별도로 관리)

import React, { useReducer } from 'react';
import CartContext from './cart-context';

// reducer함수 만들기 -상태를 업데이트 하는 함수(컴퍼넌트 밖에 있음)
// 우선 defaultCartState를 cartReducer에서 반환
const cartReducer = (state, action) => {
    if (action.type === "ADD") {
        // 현재 총 가격에 새로운 아이템의 가격과 수량을 곱한 값을 더하여 업데이트
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount; // 기존에 존재하는 수량 + 내가 선택한 아이템의 가격 * 내가 선택한 아이템의 수량

        //배열.findIndex(함수)  -제일 먼저 나오는 조건에 맞는 아이템의 인덱스를 반환
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id); // 기존 아이디와 내가 선택한 아이디가 같은지 확인
        
        // 찾은 인덱스에 해당하는 기존 아이템을 가져옴, 기존아이템이 없을 경우는 undefined
        const existingCartItem = state.items[existingCartItemIndex]; // 기존 배열에서 내가 선택한 인덱스에 해당하는 아이템을 가져오자

        let updatedItems;
        if (existingCartItem) { // 기존 아이템이 존재하는 경우에 실행!
            const updatedItem = {
                ...existingCartItem, // 내가 선택한 인덱스의 기존 아이템이 있을 경우 그 기존 아이템을 다 불러오자
                amount: existingCartItem.amount + action.item.amount // 그 기존 아이템의 수량 + 내가 선택한 아이템의 수량
            }
            updatedItems = [...state.items]; // 기존 객체로 대입
            updatedItems[existingCartItemIndex] = updatedItem; // 기존 아이템의 인덱스에 업데이트
        } else { //추가한 아이템이 기존에 없는 아이템일 경우 실행!
            //기존 아이템(배열)을 수정하지 않고, 새로운 아이템이 추가된 배열을 생성하기 위해서 concat 사용
            updatedItems = state.items.concat(action.item); //기존 아이템(배열)과 내가 선택한 아이템(배열)을 합쳐서 새로운 배열로 만들기
        }
        return { // 업데이트된 아이템 목록과 총 가격을 포함하는 새로운 상태 객체 반환
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        }
    }
    if (action.type === "REMOVE") { // 아이템 제거하는 부분
        
        //배열.findIndex(함수)  -제일 먼저 나오는 조건에 맞는 아이템의 인덱스를 반환
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id); // 기존 아이디와 내가 선택한 아이디가 같은지 확인
        
        // 찾은 인덱스에 해당하는 기존 아이템을 가져옴, 기존아이템이 없을 경우는 undefined
        const existingCartItem = state.items[existingCartItemIndex];
        // 현재 총 가격에 새로운 아이템의 가격과 수량을 곱한 값을 빼고 업데이트
        const updatedTotalAmount = state.totalAmount - existingCartItem.price; // 기존에 존재하는 수량 - 내가 선택한 아이템의 가격

        let updatedItems;
        if (existingCartItem.amount === 1) { 
            // 기존 아이템의 아이디 값이 내가 선택한 아이디 값과 일치하지 않는 아이템만 모아서 새로운 배열로 생성, 즉 내가 선택한 아이템 제거
            updatedItems = state.items.filter( item => item.id !== action.id )
        } else {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount-1,
            }
            updatedItems = [...state.items];// 기존 items 배열은 그대로
            updatedItems[existingCartItemIndex] = updatedItem; // 값을 빼준 기존 아이템의 수량만 업데이트
        }
        return { // 업데이트된 아이템 목록과 총 가격을 포함하는 새로운 상태 객체 반환
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        }
    }
    return defaultCartState;
}
const defaultCartState = {
    items: [],
    totalAmount: 0,
}

const CartProvider = (props) => {
    // useReducer 호출 (첫번째 파라미터는 연결되는 함수명, 두번째는 초기값)
    // 두개의 요소로 된 배열을 반환(상태, 함수 - reducer에 action 전달)
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item) => {
        dispatchCartAction({ type: "ADD", item: item, })
    };
    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({ type: "REMOVE", id: id, })
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;