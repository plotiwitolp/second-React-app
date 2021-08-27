import s from './Post.module.css';
import React from 'react';

const Post = (props) => {
    console.log(props)
    const currentLikesPost = React.createRef()
    const addLikes = () => {
        let id = currentLikesPost.current.id
        props.addLikes(id)

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