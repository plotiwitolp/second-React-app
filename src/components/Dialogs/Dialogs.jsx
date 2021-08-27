import React from 'react';
import {NavLink, Route} from 'react-router-dom';
import s from './Dialogs.module.css'

const Dialogs = (props) => {
    const Messages = props.messages.map(el => {
       return <div key={el.id}>
            <div>{el.body}</div>
        </div>
    })
    let dialogId = props.id
    const addMessage = () => {
        props.addMessage(dialogId)
    }
    const updateMyText = (event) => {
        let text = event.target.value
        props.updateMyText(dialogId, text)
    }
    return (
        <div className={s.Dialogs}>
            <NavLink to={`/dialogs/${props.id}`} className={s.DialogsNavLink}>
                <div>
                    {props.body}
                </div>
            </NavLink>
            <div className={s.Messages}>
                <Route path={`/dialogs/${props.id}`} render={() => (
                        <div className={s.MessagesBlock}>
                            {Messages}
                            <textarea  onChange={updateMyText} value={props.myText}  placeholder={'Enter your message'}/>
                            <button onClick={addMessage}>Send</button>
                        </div>
                    )}/>
            </div>
        </div>
    )
}
export default Dialogs