import React from 'react';
import Dialogs from './Dialogs';

const DialogsWrapper = (props) => {

    const DialogsElements = props.state.dialogs.map(el => <Dialogs {...el}
                                                                   key={el.id}
                                                                   addMessage={props.addMessage}
                                                                   updateMyText={props.updateMyText}/>)

    return (
        <div>
            {DialogsElements}
        </div>
    )
}


export default DialogsWrapper