//모달팝업 안에 들어갈 내용
import React, { useContext, useState } from 'react'
import classes from "./Cart.module.css"
import Modal from "../UI/Modal"
import CartContext from '../../store/cart-context'
import Checkout from './Checkout'


const Cart = (props) => {
    const [isCheckout, setIsCheckout] = useState(false); // 주문시 주소 입력부분이 보이고 안 보이고

    const cartCtx = useContext(CartContext);
    const hasItems = cartCtx.items.length > 0; //장바구니에 주문이있음
    const totalAmount = `$ ${cartCtx.totalAmount.toFixed(2)}`

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id)
    }
    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 })
    }


    const cartItem = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item) => (
                <li key={item.id}>
                    <div>
                        <h2>{item.name}</h2>
                        <div>
                            <span className={classes.price}>{`$${item.price.toFixed(2)}`}</span>
                            <span className={classes.amount}>x {item.amount}</span>
                        </div>
                    </div>
                    <div className={classes.btns}>
                        <button onClick={() => cartItemRemoveHandler(item.id)}>-</button>
                        <button onClick={() => cartItemAddHandler(item)}>+</button>
                    </div>
                </li>
            ))}
        </ul>
    )

    const modalActions = (
        <div className={classes.action}>
            <button className={classes['button-outline']} onClick={props.onClose}>Close</button>
            {hasItems && <button className={classes.button} onClick={()=>setIsCheckout(true)}>Order</button>}
        </div>
    )

    // 입력한 데이터를 Firebase 보내는 함수
    const submitOrderHandler = (userData)=>{
        console.log('userData',userData);
    }

    return (
        <Modal onClose={props.onClose}>
            <div>
                {cartItem}
                <div className={classes.total}>
                    <span>Total Amount</span>
                    <span>{totalAmount}</span>
                </div>
                
                { isCheckout && <Checkout onClick={props.onClose} onConfirm={submitOrderHandler}/> }
                { !isCheckout && modalActions }
            </div>
        </Modal>
    )
}

export default Cart;