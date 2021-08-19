import s from './Dialogs.module.css';
import React from 'react';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = (props) => {

    const dialogsData = [
        {id: 1, body: "Dialog 1"},
        {id: 2, body: "Dialog 2"},
        {id: 3, body: "Dialog 3"},
        {id: 4, body: "Dialog 4"}
    ]
    const messageData = [
        {id: 1, body: "Message 1"},
        {id: 2, body: "Message 2"},
        {id: 3, body: "Message 3"},
    ]

    return (
        <div className={s.wrapper}>
            <div className={s.Dialogs}>
               <Dialog  id={dialogsData[0].id} body={dialogsData[0].body}/>
               <Dialog {...dialogsData[1]} />
               <Dialog {...dialogsData[2]} />
               <Dialog {...dialogsData[3]} />
            </div>
            <div className={s.Message}>
                <Message {...messageData[0]}/>
                <Message {...messageData[1]}/>
                <Message {...messageData[2]}/>
            </div>
        </div>
    )
}

export default Dialogs