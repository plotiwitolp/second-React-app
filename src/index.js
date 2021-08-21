import './index.css';
import store from './redux/state'
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import React from 'react';

const rerender = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={store.addPost.bind(store)}
                 addMessage={store.addMessage.bind(store)}
                 updatePostText={store.updatePostText.bind(store)}
                 updateMyText={store.updateMyText.bind(store)}/>
        </BrowserRouter>, document.getElementById('root'));
}
    rerender(store.getState())

store.subscribe(rerender)

