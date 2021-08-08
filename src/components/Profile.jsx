import s from './Content.module.css';
import React from 'react';
import avatar from '../media/avatar.png';

const Profile = () => {
    return (
        <div className={s.content}>
            <div className={s.avaAndDescription}>
                <div className={s.avaWrapper}>
                    <img className={s.avatar} src={avatar} alt=''/>
                </div>
                <div className={s.description}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti explicabo harum iure quasi
                    rem repellendus tempora ut voluptates? Distinctio, tenetur!
                </div>
            </div>
            <div className={s.posts}>
                My posts
                <div>
                    New post
                </div>
                <div>
                    post 1
                </div>
                <div>
                    post 2
                </div>
            </div>
        </div>
    )
}

export default Profile