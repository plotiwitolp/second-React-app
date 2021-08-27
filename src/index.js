import './index.css';
import store from './redux/redux-store'
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import React from 'react';
import {Provider} from './StoreContext';

const rerender = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>, document.getElementById('root'));
}
rerender(store.getState())

store.subscribe(() => {
    const state = store.getState()
    rerender(state)
})

