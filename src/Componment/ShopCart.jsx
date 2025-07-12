
import React,{createContext,useState,useContext} from 'react'

const CartContext = createContext();

export const CartProvider =({children})=>{
    const [cartItems, setCartItems] = useState([])

    const addToCart = (item) =>{
        setCartItems((prevItem)=>[...prevItem,item]);
    };
    const removeFromCart = (id) =>{
        setCartItems((prev)=>prev.filter(({id})=> item.id !== itemid))
    };
    return(
        <CartContext.Provider value={{cartItems,addToCart,removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)

