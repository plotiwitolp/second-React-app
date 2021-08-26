import s from './Post.module.css';
import React from 'react';
import {addLikestAC} from '../../../../redux/profile-reducer';

const Post = (props) => {
    const currentLikesPost = React.createRef()
    const addLikes = () => {
        let id = currentLikesPost.current.id
        props.dispatch(addLikestAC(id))

    }
    return (
            <div className={s.item}>
                <img src={props.img}  alt=''/>
                <div className={s.body}>
                    {props.post}
                </div>
                <div>
                    <span className={s.likes} onClick={addLikes} ref={currentLikesPost} id={props.id}>{"like: " + props.likesCount}</span>
                </div>
            </div>
    )
}
export default Post