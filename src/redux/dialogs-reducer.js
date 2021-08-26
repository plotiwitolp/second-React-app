const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_MY_TEXT = 'UPDATE_MY_TEXT'

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                id: action.dialogId,
                body: state.dialogs[action.dialogId - 1].myText,
            }
            state.dialogs[action.dialogId - 1].messages.push(newMessage);
            state.dialogs[action.dialogId - 1].myText = '';
            return state
        case UPDATE_MY_TEXT:
            state.dialogs[action.dialogId - 1].myText = action.text
            return state
        default:
            return state
    }
}

export const addMessageAC = (dialogId) => ({type: ADD_MESSAGE, dialogId})
export const updateMyTextAC = (dialogId, text) => ({type: UPDATE_MY_TEXT,dialogId, text})

export default dialogsReducer