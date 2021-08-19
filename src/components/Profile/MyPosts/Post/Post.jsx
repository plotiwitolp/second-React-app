import s from './Post.module.css';
import React from 'react';

const Post = (props) => {
    return (
            <div className={s.item}>
                <img src={props.img}  alt=''/>
                <div className={s.body}>
                    {props.post}
                </div>
                <div>
                    <span>{"like: " + props.likesCount}</span>
                </div>
            </div>
    )
}

export default Post