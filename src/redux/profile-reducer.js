const ADD_POST = 'ADD_POST'
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT'
const ADD_LIKES = 'ADD_LIKES'

const initialState = {
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
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: state.posts.length + 1, post: state.postText, likesCount: 0,
                img: 'https://www.pinclipart.com/picdir/big/11-114024_videos-to-business-personal-information-icon-png-clipart.png',
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                postText: ''
            }

        case UPDATE_POST_TEXT:
            return {
                ...state,
                postText: action.text
            }
        case ADD_LIKES:
            let stateCopy = {
                ...state,
                posts: [...state.posts],
            }
            stateCopy.posts[action.id - 1].likesCount++
            return stateCopy

        default:
            return state

    }
}

export const addPostAC = () => ({type: ADD_POST})
export const updatePostTextAC = (text) => ({type: UPDATE_POST_TEXT, text: text})
export const addLikestAC = (id) => ({type: ADD_LIKES, id})

export default profileReducer