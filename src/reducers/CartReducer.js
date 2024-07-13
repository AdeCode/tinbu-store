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

        case 'CLEAR_CART':
            return {
                items:[]
            };

        default:
            return state
    }
}