import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


// STEP 3 Define reducers
import reducers from './reducers';

// IMPORT actions
import { postBooks, deleteBooks, updateBooks } from './actions/booksActions';
import addToCart from './actions/cartActions';

// IMPORT components
import BooksList from './components/pages/booksList';

// STEP 1 create the store
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

render(
  <Provider store={store}>
    <BooksList />
  </Provider>
  , document.getElementById('app')
);

// STEP 2 create and dispatch actions

// store.dispatch(deleteBooks({ id: 1 }));

// store.dispatch(updateBooks({
//   id: 2,
//   title: 'Learn React in 24h'
// }));

// // ADD TO CART
// store.dispatch(addToCart([{ id: 2 }]));