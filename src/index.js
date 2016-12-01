import React from 'react';
import ReactDOM from 'react-dom';
import App from './main/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import devToolsEnhancer from 'remote-redux-devtools';
import mainReducer from './reducers';
import './index.css';
import './custom.css';
import 'font-awesome/css/font-awesome.css';


const store = createStore(mainReducer, devToolsEnhancer());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
