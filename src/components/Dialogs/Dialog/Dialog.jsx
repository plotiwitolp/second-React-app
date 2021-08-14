import s from './../Dialogs.module.css';
import React from 'react';
import {NavLink} from 'react-router-dom';

const Dialog = (props) => {
    return (
        <div className={s.dialogItem}>
        <NavLink to={`/dialogs/${props.id}`} >
            {props.body} </NavLink>
        </div>
    )
}

export default Dialog