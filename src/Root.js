import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter } from 'react-router-dom';
import reducers from '../src/store/reducers'
import App from 'components/app';

const store = createStore(reducers)

const Root = () => (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
    
);

export default Root;