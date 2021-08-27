import React from 'react';
import {addLikestAC, addPostAC, updatePostTextAC} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
    const state = props.store.getState()

    const addPost = () => {
        props.store.dispatch(addPostAC())
    }
    const updatePostText = (text) => {
        props.store.dispatch(updatePostTextAC(text))
    }
    const addLikes = (id) => {
        props.store.dispatch(addLikestAC(id))
    }
    return (
        <MyPosts state={state.profileData}
                 updatePostText={updatePostText}
                 addPost={addPost}
                 addLikes={addLikes}/>
    )
}
export default MyPostsContainer