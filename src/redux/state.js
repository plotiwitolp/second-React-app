const ADD_POST = 'ADD_POST'
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT'
const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_MY_TEXT = 'UPDATE_MY_TEXT'

const store = {
    _state: {
        dialogsData: {
            dialogs: [
                {
                    id: 1, body: "Dialog 1",
                    messages: [
                        {id: 1, body: "Dialog 1 Messages 1",},
                        {id: 2, body: "Dialog 1 Messages 2",},
                    ],
                    myText: "",
                },
                {
                    id: 2, body: "Dialog 2",
                    messages: [
                        {id: 1, body: "Dialog 2 Messages 1",},
                        {id: 2, body: "Dialog 2 Messages 2",},
                    ],
                    myText: "",
                },
                {
                    id: 3, body: "Dialog 3",
                    messages: [
                        {id: 1, body: "Dialog 3 Messages 1",},
                        {id: 2, body: "Dialog 3 Messages 2",},
                    ],
                    myText: "",
                },
                {
                    id: 4, body: "Dialog 4",
                    messages: [
                        {id: 1, body: "Dialog 4 Messages 1",},
                        {id: 2, body: "Dialog 4 Messages 2",},
                    ],
                    myText: "",
                },
            ]
        },
        profileData: {
            posts: [
                {
                    id: 1, post: '1 post', likesCount: 1,
                    img: 'https://www.pinclipart.com/picdir/big/11-114024_videos-to-business-personal-information-icon-png-clipart.png',
                },
                {
                    id: 2, post: '2 post', likesCount: 22,
                    img: 'https://www.pinclipart.com/picdir/big/11-114024_videos-to-business-personal-information-icon-png-clipart.png',
                },
            ],
            postText: ''
        },
        usersData: {
            users: [
                {id: 1, name: "User 1",},
                {id: 2, name: "User 2",},
            ]
        },
        newsData: {
            news: [
                {id: 1, news: "the first news"},
                {id: 2, news: "the second news"},
            ]
        },
        sidebarData: {
            sidebar: [
                {id: 1, friend: "friend 1"},
                {id: 2, friend: "friend 2"}
            ]
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('state changed')
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            const newPost = {
                id: 3, post: this._state.profileData.postText, likesCount: 222,
                img: 'https://www.pinclipart.com/picdir/big/11-114024_videos-to-business-personal-information-icon-png-clipart.png',
            }
            this._state.profileData.posts.push(newPost)
            this._state.profileData.postText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_POST_TEXT) {
            this._state.profileData.postText = action.text
            this._callSubscriber(this._state)
        } else if (action.type === ADD_MESSAGE) {
            const newMessage = {
                id: action.dialogId,
                body: this._state.dialogsData.dialogs[action.dialogId - 1].myText,
            }
            this._state.dialogsData.dialogs[action.dialogId - 1].messages.push(newMessage);
            this._state.dialogsData.dialogs[action.dialogId - 1 ].myText = '';
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_MY_TEXT) {
            this._state.dialogsData.dialogs[action.dialogId - 1].myText = action.text
            this._callSubscriber(this._state)
        }

    }
}

export const addPostAC = () => ({type: ADD_POST})
export const updatePostTextAC = (text) => ({type: UPDATE_POST_TEXT, text: text})
export const addMessageAC = (dialogId) => ({type: ADD_MESSAGE, dialogId})
export const updateMyTextAC = (dialogId, text) => ({type: UPDATE_MY_TEXT,dialogId, text})


window.store = store
export default store