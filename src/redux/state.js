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
    getState(){
        return this._state
    },
    _callSubscriber(){console.log('state changed')},
    subscribe(observer) {
        this._callSubscriber = observer
    },


    addPost(){
        const newPost = {
            id: 3, post: this._state.profileData.postText, likesCount: 222,
            img: 'https://www.pinclipart.com/picdir/big/11-114024_videos-to-business-personal-information-icon-png-clipart.png',
        }
        this._state.profileData.posts.push(newPost)
        this.updatePostText('')
        this._callSubscriber(this._state)
    },
    addMessage(id){
        const newMessage = {
            id: id, body: this._state.dialogsData.dialogs[id - 1].myText,
        }
        this._state.dialogsData.dialogs[id - 1].messages.push(newMessage)
        this.updateMyText(id, '')
        this._callSubscriber(this._state)
    },
    updatePostText(text){

        this._state.profileData.postText = text
        this._callSubscriber(this._state)
    },
    updateMyText(id, msg){
        this._state.dialogsData.dialogs[id - 1].myText = msg
        this._callSubscriber(this._state)
    },

    dispatch(action ){

    }
}
window.store = store
export default store