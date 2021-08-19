import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const dialogsData = {
    dialogs: [
        {id: 1, body: "Dialog 1"},
        {id: 2, body: "Dialog 2"},
        {id: 3, body: "Dialog 3"},
        {id: 4, body: "Dialog 4"}
    ],
    messages: [
        {id: 1, body: "Message 1"},
        {id: 2, body: "Message 2"},
        {id: 3, body: "Message 3"},
        {id: 4, body: "Message 4"},
    ],
    myText: "this is my text"
}
const posts = [
    {id: 1, post: '1 post', likesCount: 1},
    {id: 2, post: '2 post', likesCount: 22},
    {id: 3, post: '3 post', likesCount: 222},
    {id: 4, post: '4 post', likesCount: 2222},
]

const users = [
    {id: 1, name: "User 1"},
    {id: 2, name: "User 2"},
    {id: 3, name: "User 3"},
    {id: 4, name: "User 4"},
]


ReactDOM.render(<App dialogsData={dialogsData} posts={posts} users={users}/>, document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
