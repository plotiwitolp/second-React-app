import s from './App.module.css';
import React from 'react';
import avatar from  './media/avatar.png'

const App = () => {
    return (
        <div className={s.appWrapper}>
            <header className={s.header}>
                <img className={s.logo}
                     src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png'
                     alt=''/>
            </header>
            <nav className={s.sidebar}>
                <div>
                    <a href=''>Profile</a>
                </div>
                <div>
                    <a href=''>Messages</a>
                </div>
                <div>
                    <a href=''>Users</a>
                </div>
            </nav>
            <div className={s.content}>
               <div className={s.avaAndDescription}>
                   <div className={s.avaWrapper}>
                       <img className={s.avatar} src={avatar} alt=''/>
                   </div>
                   <div className={s.description}>
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti explicabo harum iure quasi rem repellendus tempora ut voluptates? Distinctio, tenetur!
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
        </div>
    );
}


export default App;
