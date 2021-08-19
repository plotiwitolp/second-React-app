import s from './MyPosts.module.css';
import React from 'react';
import Post from './Post/Post';

const MyPosts = (props) => {


    const postsElements = props.posts.map(el => <Post {...el} key={el.id}/>)

    const newPostElement = React.createRef()

    const addPost = () => {
        let text = newPostElement.current.value
        alert(text)
    }

    return (
        <div className={s.posts}>
            My posts
            <div>
                <textarea ref={newPostElement}></textarea>
                <button onClick={addPost}>Add post</button>
            </div>
            {postsElements}
        </div>
    )
}

export default MyPosts