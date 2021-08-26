import './index.css';
import store from './redux/redux-store'
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import React from 'react';

const rerender = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>, document.getElementById('root'));
}
rerender(store.getState())
store.subscribe(() => {
    const state = store.getState()
    rerender(state)
})

