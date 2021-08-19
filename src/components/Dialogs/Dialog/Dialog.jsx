import s from './../Dialogs.module.css';
import React from 'react';
import {NavLink} from 'react-router-dom';

const Dialog = (props) => {

    let path = `/dialogs/${props.id}`

    return (
        <div className={s.dialogItem}>
        <NavLink to={path} >
            {props.body} </NavLink>
        </div>
    )
}

export default Dialog