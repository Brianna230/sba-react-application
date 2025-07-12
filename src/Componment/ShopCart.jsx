
import React,{createContext,useState,useContext} from 'react'

const CartContext = createContext();

export const CartProvider =({children})=>{
    const [cartItems, setCartItems] = useState([])

    const addToCart = (item) =>{
        setCartItems((prevItem)=>[...prevItem,item]);
    };
    const removeFromCart = (id) =>{
        setCartItems
    }
}

