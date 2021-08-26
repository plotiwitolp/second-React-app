import React from 'react';
import Dialogs from './Dialogs';

const DialogsWrapper = (props) => {

    const DialogsElements = props.state.dialogs.map(el => <Dialogs {...el}
                                                                   key={el.id}
                                                                   dispatch={props.dispatch}/>)
    return (
        <div>
            {DialogsElements}
        </div>
    )
}
export default DialogsWrapper