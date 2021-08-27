import DialogsWrapper from './DialogsWrapper';
import {connect} from 'react-redux';
import {addMessageAC, updateMyTextAC} from '../../redux/dialogs-reducer';

const mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsData
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        addMessage: (id) => {dispatch(addMessageAC(id))},
        updateMyText: (dialogId, text) => {dispatch(updateMyTextAC(dialogId, text))}
    }
}
const DialogsWrapperContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsWrapper)
export default DialogsWrapperContainer