const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_MY_TEXT = 'UPDATE_MY_TEXT'

const initialState = {
    dialogs: [
        {
            id: 1, body: "Dialog 1",
            messages: [
                {id: 1, body: "Dialog 1 Messages 1",},
            ],
            myText: "",
        },
        {
            id: 2, body: "Dialog 2",
            messages: [
                {id: 1, body: "Dialog 2 Messages 1",},
            ],
            myText: "",
        },
        {
            id: 3, body: "Dialog 3",
            messages: [
                {id: 1, body: "Dialog 3 Messages 1",},
            ],
            myText: "",
        },
        {
            id: 4, body: "Dialog 4",
            messages: [
                {id: 1, body: "Dialog 4 Messages 1",},
            ],
            myText: "",
        },
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                id: state.dialogs[action.dialogId - 1].messages.length + 1,
                body: state.dialogs[action.dialogId - 1].myText,
            }
            return {
                ...state,
                dialogs: state.dialogs.map(d => {
                    if (d.id === action.dialogId) {
                        return {...d, messages: [...d.messages, newMessage], myText: '' }
                    }
                    return d
                })
            }
        case UPDATE_MY_TEXT:
            return {
                ...state,
                dialogs: state.dialogs.map(d => {
                    if (d.id === action.dialogId) {
                        return {...d, myText: action.text }
                    }
                    return d
                })
            }
        default:
            return state
    }
}
export const addMessageAC = (dialogId) => ({type: ADD_MESSAGE, dialogId})
export const updateMyTextAC = (dialogId, text) => ({type: UPDATE_MY_TEXT, dialogId, text})
export default dialogsReducer