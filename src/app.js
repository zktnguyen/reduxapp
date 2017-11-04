import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';


// STEP 3 Define reducers
import reducers from './reducers';
// STEP 1 create the store
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);


// STEP 2 create and dispatch actions
store.dispatch({
  type: 'POST_BOOK',
  payload: [{
      id: 1,
      title: 'this is the book title',
      description: 'this is the book description',
      price: 33.33
    },
    {
      id: 2,
      title: 'this is the second book title',
      description: 'this is the second book description',
      price: 33.33
    }
  ]
});

store.dispatch({
  type: 'DELETE_BOOK',
  payload: {
    id: 1
  }
});

store.dispatch({
  type: 'UPDATE_BOOK',
  payload: {
    id: 2,
    title: 'Learn React in 24h'
  }
});