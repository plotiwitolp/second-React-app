import s from './Navbar.module.css';
import React from 'react';

const Navbar = () => {
    return (
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
    )
}

export default Navbar