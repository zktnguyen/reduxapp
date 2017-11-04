import { combineReducers } from 'redux';

// Import reducers to be combined

import booksReducers from './booksReducers';

export default combineReducers({
  books: booksReducers
});