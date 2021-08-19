import s from './Dialogs.module.css';
import React from 'react';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = (props) => {




    const dialogsElements = props.state.dialogs.map(el => <Dialog {...el} key={el.id}/>)
    const messagesElements = props.state.messages.map(el => <Message {...el} key={el.id}/>)

    const myText = React.createRef()

    const sendMyText = () => {
        let newMyText = myText.current.value
        alert(newMyText)
    }

    return (
        <div className={s.wrapper}>
            <div className={s.Dialogs}>
                {dialogsElements}
            </div>
            <div className={s.Message}>
                {messagesElements}
                <div>{props.state.myText}</div>
                <textarea ref={myText}></textarea>
                <button onClick={sendMyText}>send</button>
            </div>
        </div>
    )
}

export default Dialogs