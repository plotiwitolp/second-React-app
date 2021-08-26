import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import usersReducer from './users-reducer';
import newsReducer from './news-reducer';
import sidebarReducer from './sidebar-reducer';


const store = {
    _state: {
        dialogsData: {
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
            ],
            newsText: ''
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

        this._state.dialogsData = dialogsReducer(this._state.dialogsData, action)
        this._state.profileData = profileReducer(this._state.profileData, action)
        this._state.usersData = usersReducer(this._state.usersData, action)
        this._state.newsData = newsReducer(this._state.newsData, action)
        this._state.sidebarData = sidebarReducer(this._state.sidebarData, action)

        this._callSubscriber(this._state)
    }
}

window.store = store
export default store