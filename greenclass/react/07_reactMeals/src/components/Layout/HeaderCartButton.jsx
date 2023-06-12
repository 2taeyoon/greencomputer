import React, { useContext } from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import CartContext from '../../store/cart-context'

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);
    //const numberOfCartIntems = cartCtx.items.length; -아이템숫자X -> 아이템 안의 amount를 합해줘야
    //배열.reduce((합해진값, 밸류)=>{ 합해진값 + 밸류 }, 합해진값의초기값)
    const numberOfCartIntems = cartCtx.items.reduce((sum, item) => {
        return sum + item.amount
    }, 0)

    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}><CartIcon /></span>
            <span className={classes.badge}>{numberOfCartIntems}</span>
        </button>
    )
}

export default HeaderCartButton;