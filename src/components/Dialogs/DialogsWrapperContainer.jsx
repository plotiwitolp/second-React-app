import React from 'react';
import DialogsWrapper from './DialogsWrapper';
import {addMessageAC, updateMyTextAC} from '../../redux/dialogs-reducer';
import StoreContext from '../../StoreContext';

const DialogsWrapperContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {(store => {
            const state = store.getState()

            const addMessage = (dialogId) => {
                store.dispatch(addMessageAC(dialogId))
            }
            const updateMyText = (dialogId, text) => {
                store.dispatch(updateMyTextAC(dialogId, text))
            }
            return (
                <DialogsWrapper state={state}
                                addMessage={addMessage}
                                updateMyText={updateMyText}/>
            )
        })}
        </StoreContext.Consumer>
    )
}
export default DialogsWrapperContainer