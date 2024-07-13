import React, { createContext, useReducer } from 'react'
import { cartReducer } from '@/reducers/CartReducer';

export const CartContext = createContext()

const initialState = {
    items:[]
};

function CartContextProvider({children}) {
    const [state, dispatch] = useReducer(cartReducer, initialState)
  return (
    <CartContext.Provider value={{state, dispatch}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider