import s from './MyPosts.module.css';
import React from 'react';
import Post from './Post/Post';

const MyPosts = (props) => {



    const postsElements =  props.posts.map(el => <Post {...el} key={el.id}/>)


    return (
        <div className={s.posts}>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            {postsElements}
        </div>
    )
}

export default MyPosts