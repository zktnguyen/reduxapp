
export const addToCart = (book) => ({
  type: 'ADD_TO_CART',
  payload: book
});

export const deleteCartItem = (cart) => ({
  type: 'DELETE_CART_ITEM',
  payload: cart
});

export const updateCart = (_id, unit) => ({
  type: 'UPDATE_CART',
  payload: { _id, unit }
})