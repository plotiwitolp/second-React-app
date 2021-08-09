import s from './Post.module.css';
import React from 'react';

const Post = (props) => {
    return (
            <div className={s.item}>
                <img src='https://www.pinclipart.com/picdir/big/11-114024_videos-to-business-personal-information-icon-png-clipart.png' alt=''/>
                {props.message}
                <div>
                    <span>{props.like}</span>
                </div>
            </div>
    )
}

export default Post