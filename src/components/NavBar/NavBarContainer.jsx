import s from './Navbar.module.css';
import React from 'react';
import {NavLink} from 'react-router-dom';
import NavBar from './NavBar';
import StoreContext from '../../StoreContext';

const NavBarContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {(store)=>(
            <NavBar state={store.getState().sidebarData}/>
            )}
        </StoreContext.Consumer>
    )
}
export default NavBarContainer