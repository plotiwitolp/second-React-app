import React from 'react';
import {addLikestAC, addPostAC, updatePostTextAC} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';

const mapStateToProps = (state) =>{
    return {
        profileData: state.profileData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updatePostText: (text)=>{dispatch(updatePostTextAC(text))},
        addPost: ()=>{dispatch(addPostAC())},
        addLikes: (id)=>{dispatch(addLikestAC(id))},
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer