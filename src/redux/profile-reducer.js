const ADD_POST = 'ADD_POST'
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT'
const ADD_LIKES = 'ADD_LIKES'

const profileReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: state.posts.length + 1, post: state.postText, likesCount: 0,
                img: 'https://www.pinclipart.com/picdir/big/11-114024_videos-to-business-personal-information-icon-png-clipart.png',
            }
            state.posts.push(newPost)
            state.postText = ''
            return state
        case UPDATE_POST_TEXT:
            state.postText = action.text
            return state
        case ADD_LIKES:
            state.posts[action.id - 1].likesCount++
            return state
        default:
            return state
    }
}

export const addPostAC = () => ({type: ADD_POST})
export const updatePostTextAC = (text) => ({type: UPDATE_POST_TEXT, text: text})
export const addLikestAC = (id) => ({type: ADD_LIKES, id})

export default profileReducer