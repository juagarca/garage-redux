import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';

import '../assets/stylesheets/application.scss';

import carsReducer from './reducers/cars_reducer';
import CarsIndex from './containers/cars_index';

// const name = prompt("What is your garage?") || `garage${Math.floor(10 + (Math.random() * 90))}`;
const reducer = (state = null) => state;

const initialState = {
  garageName: "test",
  cars: []
};

const reducers = combineReducers({
  garageName: reducer,
  cars: carsReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <Router history={history}>
      <div className="view-container">
        <Switch>
          <Route path="/" component={CarsIndex} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
