import s from './Navbar.module.css';
import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = (props) => {
    const sidebarElements = props.sidebarData.sidebar.map(el => <div className={s.sidebarFriend} key={el.id}>{el.friend}</div>)
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
            <div className={s.sidebar__item}>
                <NavLink className={s.item} activeClassName={s.active} to='/news'>News</NavLink>
            </div>
            <div className={s.sidebar__item}>
                <NavLink className={s.item} activeClassName={s.active} to='/games'>Games</NavLink>
            </div>
            {sidebarElements}
        </nav>
    )
}
export default NavBar