export const cartReducer = (state, action) => {
    switch(action.type){
        case 'ADD_ITEM':
            const updatedItems = [...state.items, action.payload];
            return {
                ...state,
                items:updatedItems,
            }

        case 'DELETE_ITEM':
            const filteredItems = state.items.filter(item => item.id !== action.payload.id);
            // const reducedTotalAmount = state.totalAmount - action.payload.price;
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