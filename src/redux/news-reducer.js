const UPDATE_NEWS_TEXT = 'UPDATE_NEWS_TEXT'
const ADD_NEWS = 'ADD_NEWS'

const initialState = {
        news: [
            {id: 1, news: "the first news"},
            {id: 2, news: "the second news"},
        ],
        newsText: ''
}

 const newsReducer = (state = initialState, action) => {
     switch (action.type) {
         case UPDATE_NEWS_TEXT:
             state.newsText = action.text
             return state
         case ADD_NEWS:
             const newNews = {id: state.news.length + 1, news: state.newsText}
             state.news.push(newNews)
             state.newsText = ''
             return state
         default:
             return state
     }

}

export const updateNewsTextAC = (text) => ({type: UPDATE_NEWS_TEXT, text})
export const addNewsTextAC = () => ({type: ADD_NEWS})

export default newsReducer