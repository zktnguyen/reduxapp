import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { Route, Router, browserHistory, IndexRoute } from 'react-router';
import logger from 'redux-logger';


// STEP 3 Define reducers
import reducers from './reducers';

// IMPORT components
import BooksList from './components/pages/booksList';
import Main from './main';

// STEP 1 create the store
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

render(
  <Provider store={store}>
   <Router history={browserHistory}>
   <Route path='/' component={Main}>
     <IndexRoute component={BooksList} />
   </Route>
 </Router>
      
  </Provider>
  , document.getElementById('app')
);