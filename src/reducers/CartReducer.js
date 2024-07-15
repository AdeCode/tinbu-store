export const cartReducer = (state, action) => {
    switch(action.type){
        case 'ADD_ITEM':
            console.log('adding from reducer')
            const updatedItems = [...state.items, action.payload];
            localStorage.setItem('cart',JSON.stringify(updatedItems))
            return {
                ...state,
                items:updatedItems,
            }

        case 'DELETE_ITEM':
            console.log('delete from red')
            const filteredItems = state.items.filter(item => item.id !== action.payload.id);
            localStorage.setItem('cart',JSON.stringify(filteredItems))
            return {
                ...state,
                items:filteredItems,
            }

        case 'QUANTITY_DECREASE':
            const newItems = state.items
            const updated = [...newItems, newItems[action.payload.id].quantity = newItems[action.payload.id].quantity - 1]
            return {
                ...state,
                items:updated,
            }

        case 'QUANTITY_INCREASE':
            const increaseItemQty = state.items
            const newIncreasedItems = [...increaseItemQty, increaseItemQty[action.payload.id].quantity = increaseItemQty[action.payload.id].quantity + 1]
            return {
                ...state,
                items:newIncreasedItems,
            }

        case 'CLEAR_CART':
            return {
                items:[]
            };

        default:
            return state
    }
}