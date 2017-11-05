import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


// STEP 3 Define reducers
import reducers from './reducers';

// IMPORT components
import BooksList from './components/pages/booksList';
import Menu from './components/menu';
import Footer from './components/footer';
// STEP 1 create the store
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

render(
  <Provider store={store}>
  <div>
    <Menu/>
    <BooksList />
    <Footer/>
  </div>
      
  </Provider>
  , document.getElementById('app')
);