import s from './MyPosts.module.css';
import React from 'react';
import Post from './Post/Post';

const MyPosts = (props) => {
    const postsElements = props.profileData.posts.map(el => <Post {...el} key={el.id}
                                                            addLikes={props.addLikes}/>).reverse()
    const addPost = () => {
        props.addPost()
    }
    const updatePostText = (event) =>{
        let text = event.target.value
        props.updatePostText(text)
    }
    return (
        <div className={s.posts}>
            My posts
            <div>
                <textarea onChange={updatePostText} value={props.profileData.postText} placeholder={'Enter your text'}/>
                <button onClick={addPost}>Add post</button>
            </div>
            {postsElements}
        </div>
    )
}
export default MyPosts