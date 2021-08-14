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
            <Post
                message='First message'
                likesCount='1'/>
            <Post
                message='Second message'
                likesCount='22'/>
        </div>
    )
}

export default MyPosts