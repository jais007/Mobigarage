const initialState = {
    data:[],
    totalPrice:0
}
const cartItems = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            let totalPriceCart=parseInt(state.totalPrice)
            let CloneData=state.data.concat(action.payload)
            totalPriceCart=totalPriceCart+parseInt(action.payload.price)
            return {...state,data:CloneData,totalPrice:totalPriceCart}
        case 'REMOVE_FROM_CART':
            let remove=state.data.find(item=>item.id==action.payload.id)
            let newdata=state.data.filter((cartItem )=> cartItem.id != action.payload.id)
            return {...state,data:newdata,totalPrice:state.totalPrice-parseInt(remove.price)}
    }
    return state
}

export default cartItems
