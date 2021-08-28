import React from 'react';
import s from './Users.module.css'

const User = (props) => {
    return (
        <div className={s.user}>
            <div id={props.id}> {props.name}</div>
            <div>{props.status}</div>
            <div>{props.location.city}, {props.location.country}</div>
        </div>
    );
};
export default User;