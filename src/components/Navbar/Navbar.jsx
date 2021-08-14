import s from './Navbar.module.css';
import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={s.sidebar}>
            <div className={s.sidebar__item}>
                <NavLink className={s.item} activeClassName={s.active} to='/profile'>Profile</NavLink>
            </div>
            <div className={s.sidebar__item}>
                <NavLink className={s.item} activeClassName={s.active} to='/dialogs'>Messages</NavLink>
            </div>
            <div className={s.sidebar__item}>
                <NavLink className={s.item} activeClassName={s.active} to='/users'>Users</NavLink>
            </div>
        </nav>
    )
}

export default Navbar