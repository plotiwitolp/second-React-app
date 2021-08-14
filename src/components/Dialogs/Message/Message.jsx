import s from './../Dialogs.module.css';
import React from 'react';

const Message = (props) => {
    return (
        <div className={s.messageItem}>{props.body}</div>
    )
}

export default Message