import s from './Dialogs.module.css';
import React from 'react';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = (props) => {




    const dialogsElements = props.dialogs.map(el => <Dialog {...el} key={el.id}/>)
    const messagesElements = props.messages.map(el => <Message {...el} key={el.id}/>)

    return (
        <div className={s.wrapper}>
            <div className={s.Dialogs}>
                {dialogsElements}
            </div>
            <div className={s.Message}>
                {messagesElements}
                <div>{props.myText}</div>
            </div>
        </div>
    )
}

export default Dialogs