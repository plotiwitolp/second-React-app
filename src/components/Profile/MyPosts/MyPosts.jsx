import s from './MyPosts.module.css';
import React from 'react';
import Post from './Post/Post';
import {addPostAC, updatePostTextAC} from '../../../redux/state';




const MyPosts = (props) => {

    const postsElements = props.posts.map(el => <Post {...el} key={el.id}/>)

    const newPostElement = React.createRef()

    const addPost = () => {
        props.dispatch(addPostAC())
    }

    const updatePostText = () =>{
        let text = newPostElement.current.value
        props.dispatch(updatePostTextAC(text))
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