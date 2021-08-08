import s from './Header.module.css';
import React from 'react';

const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.logo}
                 src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png'
                 alt=''/>
        </header>
    )
}

export default Header