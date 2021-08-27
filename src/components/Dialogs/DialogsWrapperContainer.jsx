import React from 'react';
import DialogsWrapper from './DialogsWrapper';
import {addMessageAC, updateMyTextAC} from '../../redux/dialogs-reducer';

const DialogsWrapperContainer = (props) => {
    const state = props.store.getState()

    const addMessage = (dialogId) => {
        props.store.dispatch(addMessageAC(dialogId))
    }
    const updateMyText = (dialogId, text) => {
        props.store.dispatch(updateMyTextAC(dialogId, text))
    }

    return (
        <DialogsWrapper state={state}
                        addMessage={addMessage}
                        updateMyText={updateMyText}/>
    )
}
export default DialogsWrapperContainer