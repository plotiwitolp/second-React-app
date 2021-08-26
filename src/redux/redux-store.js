import {combineReducers, createStore} from 'redux';
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import usersReducer from './users-reducer';
import sidebarReducer from './sidebar-reducer';
import newsReducer from './news-reducer';

const reducers = combineReducers({
    dialogsData: dialogsReducer,
    profileData: profileReducer,
    usersData: usersReducer,
    newsData: newsReducer,
    sidebarData: sidebarReducer
})

const store = createStore(reducers);

export default store