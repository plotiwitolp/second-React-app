import './index.css';
import state, {subscribe} from './redux/state'
import {addMessage, addPost, updateMyText, updatePostText} from './redux/state';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import React from 'react';

const rerender = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 addMessage={addMessage}
                 updatePostText={updatePostText}
                 updateMyText={updateMyText}/>
        </BrowserRouter>, document.getElementById('root'));
}
rerender(state)

subscribe(rerender)

