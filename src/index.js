import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './components/app/app';
import * as serviceWorker from './serviceWorker';
import HeadSearch from './components/headsearch/headsearch';

// 路由器
ReactDOM.render(<Router>
                  <Route path="/" exact component={ App }></Route>
                  <Route path="/search/" component={ HeadSearch }></Route>        
                </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
