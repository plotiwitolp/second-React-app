import s from './MyPosts.module.css';
import React from 'react';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={s.posts}>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post message='Hi, how are you?' like='1'/>
            <Post message="It's my first post" like='22'/>
        </div>
    )
}

export default MyPosts