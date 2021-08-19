import s from './MyPosts.module.css';
import React from 'react';
import Post from './Post/Post';

const MyPosts = () => {

    const postsData = [
    {id: 1, message: '1 message', likesCount: 1},
    {id: 2, message: '2 message', likesCount: 22},
    ]

    return (
        <div className={s.posts}>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post {...postsData[0]}/>
            <Post {...postsData[1]}/>
        </div>
    )
}

export default MyPosts