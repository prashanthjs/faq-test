import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store';
import * as serviceWorker from './serviceWorker';
import App from './App';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

ReactDOM.render(
    <Provider store={configureStore()}>
        <App/>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
