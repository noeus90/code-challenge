import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import DetailedCard from './DetailedCard';
import './stylesheets/style.css';
import store from './store';


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="/(:id)" component={DetailedCard} />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
