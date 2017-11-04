import { combineReducers } from 'redux';

// Import reducers to be combined

import booksReducers from './booksReducers';
import cartReducers from './cartReducers';

export default combineReducers({
  books: booksReducers,
  cart: cartReducers
});