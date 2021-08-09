import s from './Navbar.module.css';
import React from 'react';

const Navbar = () => {
    return (
        <nav className={s.sidebar}>
            <div className={s.sidebar__item}>
                <a className={s.item} href=''>Profile</a>
            </div>
            <div className={s.sidebar__item}>
                <a className={s.item} href=''>Messages</a>
            </div>
            <div className={s.sidebar__item}>
                <a className={s.item} href=''>Users</a>
            </div>
        </nav>
    )
}

export default Navbar