export function CartReducer(state,action){
    switch(action.type){
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.payload],
                count: state.count + action.payload.quantity
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id)
            }
        case 'CLEAR_CART':
            return {
                ...state,
                cart: [],
                count: 0,
            }
        default:
            break;
        }

}