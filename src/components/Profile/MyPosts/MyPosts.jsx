import s from './MyPosts.module.css';
import React from 'react';
import Post from './Post/Post';

const MyPosts = (props) => {


    const postsElements = props.posts.map(el => <Post {...el} key={el.id}/>)

    const newPostElement = React.createRef()

    const addPost = () => {
        props.dispatch({type: "ADD_POST"})
    }

    const updatePostText = () =>{
        let text = newPostElement.current.value
        props.dispatch({type: "UPDATE_POST_TEXT", text})
    }

    return (
        <div className={s.posts}>
            My posts
            <div>
                <textarea ref={newPostElement} onChange={updatePostText} value={props.postText} />
                <button onClick={addPost}>Add post</button>
            </div>
            {postsElements}
        </div>
    )
}

export default MyPosts