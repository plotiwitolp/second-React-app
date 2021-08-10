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
                message='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias, aperiam autem exercitationem explicabo facilis maxime modi natus non optio, sapiente totam vero, voluptatum? Commodi dignissimos et fugiat obcaecati pariatur possimus voluptatibus.'
                like='1'/>
            <Post message='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias, aperiam autem exercitationem explicabo facilis maxime modi natus non optio, sapiente totam vero, voluptatum? Commodi dignissimos et fugiat obcaecati pariatur possimus voluptatibus.' like='22'/>
        </div>
    )
}

export default MyPosts