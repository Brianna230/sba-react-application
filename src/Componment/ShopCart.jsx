
import React,{createContext,useState,useContext} from 'react'

const CartContext = createContext();

export const CartProvider =({children})=>{
    const [cartItems, setCartItems] = useState([])

    const addToCart = (item) =>{
        setCartItems((prevItem)=>[...prevItem,item]);
    };
    const removeFromCart = (idToRemove) =>{
        setCartItems((prev)=>prev.filter((item)=> item.id !== idToRemove))
    };
    return(
        <CartContext.Provider value={{cartItems,addToCart,removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)

