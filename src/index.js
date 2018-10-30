/*
* 入口js
* */

import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';

import App from './App'
import store from './redux/store'
import './mock'
import 'swiper/dist/css/swiper.min.css';

ReactDOM.render((
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path='/' component={App}/>
      </Switch>
    </HashRouter>
  </Provider>
), document.getElementById('root'));