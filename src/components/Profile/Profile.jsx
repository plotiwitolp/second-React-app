import s from './Profile.module.css';
import React from 'react';
import avatar from '../../media/avatar.png';
import MyPosts from './MyPosts/MyPosts';

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
          <MyPosts/>
        </div>
    )
}

export default Profile