
export const totals = (prices) => {
  const totalAmount = prices.map((price) => price.price * price.quantity)
  .reduce((a, b) => a + b, 0);

  const totalQty = prices.map((price) => price.quantity)
  .reduce((a, b) => a + b, 0);

  return { amount: totalAmount.toFixed(2), qty: totalQty };
}



export default function cartReducers(state={ cart:[] }, action) {
  let currentCart = [];
  let index = -1;
  let newBook = {};
  let cartUpdate = [];
  let quantity = 0;
  switch(action.type) {
    case 'ADD_TO_CART':
      return { cart: [...state, ...action.payload], 
        totalAmount: totals(action.payload).amount,
        totalQty: totals(action.payload).qty };
    case 'DELETE_CART_ITEM':
      return { cart: [...state, ...action.payload], 
        totalAmount: totals(action.payload).amount,
        totalQty: totals(action.payload).qty };
    case 'UPDATE_CART':
      currentCart = [...state.cart];
      // Determine at which index in booksarray is the book to be deleted
      index = currentCart.findIndex(item => 
        item._id === action.payload._id);
      quantity = currentCart[index].quantity;
      if (quantity === 1 && action.payload.unit === -1) quantity = 1;
      else quantity += action.payload.unit;
      newBook = { ...currentCart[index], quantity };
      cartUpdate = [ ...currentCart.slice(0,index), newBook,
                      ...currentCart.slice(index + 1) ] ;
      return {...state, cart: cartUpdate,
        totalAmount: totals(cartUpdate).amount,
        totalQty: totals(cartUpdate).qty };
    default:
      return state;
  }
}

