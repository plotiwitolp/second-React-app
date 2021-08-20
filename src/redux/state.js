let rerender = () => {
    console.log('state changed')
}


const state = {
    dialogsData: {
        dialogs: [
            {id: 1, body: "Dialog 1",},
            {id: 2, body: "Dialog 2",},
        ],
        messages: [
            {id: 1, body: "Message 1",},
            {id: 2, body: "Message 2",},
        ],
        myText: "",
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
}

window.state = state

export const addPost = () => {
    const newPost = {
        id: 3, post: state.profileData.postText, likesCount: 222,
        img: 'https://www.pinclipart.com/picdir/big/11-114024_videos-to-business-personal-information-icon-png-clipart.png',
    }
    state.profileData.posts.push(newPost)
    updatePostText('')
    rerender(state)
}

export const addMessage = () => {
    const newMessage = {
        id: 1, body: state.dialogsData.myText,
    }
    state.dialogsData.messages.push(newMessage)
    updateMyText('')
    rerender(state)
}

export const updatePostText = (text) =>{
    state.profileData.postText = text
    rerender(state)
}

export const updateMyText = (text) =>{
    state.dialogsData.myText = text
    rerender(state)
}

export const subscribe = (observer) => {
    rerender = observer
}

export default state