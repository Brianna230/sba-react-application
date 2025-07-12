import React from 'react'
import {useCart} from './ShopCart'

function Cart(){
 const { cartItems , removeFromCart} = useCart()
    return(
        <div>
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ): (
                <ul>
                    {cartItems.map(item =>(
                        <p key={item.id}>
                            {item.name} - {item.price} 
                            <button onClick={()=> removeFromCart(item.id)}>Remove</button>
                        </p>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Cart