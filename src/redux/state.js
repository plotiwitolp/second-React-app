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
        myText: "this is my text",
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
            {id: 1, friend: "friend 2"}
        ]
    }
}
export default state