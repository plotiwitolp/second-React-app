import s from './Dialogs.module.css';
import React from 'react';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.Dialogs}>
                <Dialog body={"Dialog 1"} id={"1"}/>
                <Dialog body={"Dialog 2"} id={"2"}/>
                <Dialog body={"Dialog 3"} id={"3"}/>
                <Dialog body={"Dialog 4"} id={"4"}/>
            </div>
            <div className={s.Message}>
                <Message body={"Message 1"}/>
                <Message body={"Message 2"}/>
                <Message body={"Message 3"}/>
            </div>
        </div>
    )
}

export default Dialogs