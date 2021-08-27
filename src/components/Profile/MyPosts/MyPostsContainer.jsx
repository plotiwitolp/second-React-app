import React from 'react';
import {addLikestAC, addPostAC, updatePostTextAC} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';

const MyPostsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {(store) => {
            const state = store.getState()

            const addPost = () => {
                store.dispatch(addPostAC())
            }
            const updatePostText = (text) => {
                store.dispatch(updatePostTextAC(text))
            }
            const addLikes = (id) => {
                store.dispatch(addLikestAC(id))
            }
            return (
                <MyPosts state={state.profileData}
                         updatePostText={updatePostText}
                         addPost={addPost}
                         addLikes={addLikes}/>
            )
        }}
        </StoreContext.Consumer>
    )
}
export default MyPostsContainer