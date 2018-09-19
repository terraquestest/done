import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import bootstrap from 'bootstrap';
import './globalStyles.css';

import SearchContainer from './containers/SearchContainer';
import { appReducer } from './reducers/app';

let store = createStore(appReducer);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <div>
                    <Route path='/' component={SearchContainer} />
                </div>
            </div>
        </Router>
    </Provider>
, document.getElementById('root'));
