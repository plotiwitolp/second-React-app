import React from 'react';
import {NavLink, Route} from 'react-router-dom';
import s from './DialogsWrapper.module.css'
import {addMessageAC, updateMyTextAC} from '../../redux/state';



const Dialogs = (props) => {
    const Messages = props.messages.map(el => <div key={el.id}><div>{el.body}</div></div>)
    const newMessageElement = React.createRef()
    let dialogId = props.id
    const addMessage = () => {
        props.dispatch(addMessageAC(dialogId))
    }
    const updateMyText = () => {
        let text = newMessageElement.current.value
        props.dispatch(updateMyTextAC(dialogId, text))
    }

    return (
        <div className={s.Dialogs}>
            <NavLink to={`/dialogs/${props.id}`} className={s.DialogsNavLink}>
            <div>
                {props.body}
            </div>
            </NavLink>
            <div className={s.Messages}>
                <Route path={`/dialogs/${props.id}`} render={() => {
                    return (
                        <div className={s.MessagesBlock}>
                            {Messages}
                            <textarea ref={newMessageElement} onChange={updateMyText} value={props.myText}/>
                            <button onClick={addMessage}>Send</button>
                        </div>
                    )
                }}/>
            </div>
        </div>
    )
}

export default Dialogs