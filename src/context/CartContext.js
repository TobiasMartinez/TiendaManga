import { createContext, useReducer } from "react";
import { CartReducer } from "./CartReducer";

export const CartContext = createContext(null);

const initialState = {
    cart: [],
    count: 0,
    product: {},
}

export const CartContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(CartReducer, initialState);

    const addToCart = (item) => {
        dispatch({type: 'ADD_TO_CART', payload: item})
    }

    const removeFromCart = (item) => {
        dispatch({type: 'REMOVE_FROM_CART', payload: item})
    }
    const clearCart = () => {
        dispatch({type: 'CLEAR_CART'})
    }



    return (
        <CartContext.Provider value={{ cart:state.cart, addToCart, removeFromCart, clearCart, count: state.count }}>
            {children}
        </CartContext.Provider>
    )
}



