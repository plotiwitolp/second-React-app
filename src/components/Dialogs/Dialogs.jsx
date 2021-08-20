import s from './Dialogs.module.css';
import React from 'react';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = (props) => {




    const dialogsElements = props.state.dialogs.map(el => <Dialog {...el} key={el.id}/>)
    const messagesElements = props.state.messages.map(el => <Message {...el} key={el.id}/>)

    const myText = React.createRef()

    const sendMyText = () => {
        props.addMessage()
    }
    const updateMyText = () =>{
        let newMyText = myText.current.value
        props.updateMyText(newMyText)
    }

    return (
        <div className={s.wrapper}>
            <div className={s.Dialogs}>
                {dialogsElements}
            </div>
            <div className={s.Message}>
                {messagesElements}
                <textarea ref={myText} onChange={updateMyText} value={props.state.myText}/>
                <button onClick={sendMyText}>send</button>
            </div>
        </div>
    )
}

export default Dialogs