import React from 'react'
import {useCart} from './ShopCart'

function Cart(){
    const{cartItems, removeFromCart} = useCart();

    return(
        <div>
            <h2>Your Cart</h2>
        </div>
    )
}