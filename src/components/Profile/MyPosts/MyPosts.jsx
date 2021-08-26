import s from './MyPosts.module.css';
import React from 'react';
import Post from './Post/Post';
import {addPostAC, updatePostTextAC} from '../../../redux/profile-reducer';



const MyPosts = (props) => {

    const postsElements = props.state.posts.map(el => <Post {...el} key={el.id} dispatch={props.dispatch}/>).reverse()

    const addPost = () => {
        props.dispatch(addPostAC())
    }

    const updatePostText = (event) =>{
        let text = event.target.value
        props.dispatch(updatePostTextAC(text))
    }



    return (
        <div className={s.posts}>
            My posts
            <div>
                <textarea onChange={updatePostText} value={props.state.postText} placeholder={'Enter your text'}/>
                <button onClick={addPost}>Add post</button>
            </div>
            {postsElements}
        </div>
    )
}

export default MyPosts