import s from './App.module.css';
import React from 'react';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import {Route} from 'react-router-dom';
import DialogsWrapperContainer from './components/Dialogs/DialogsWrapperContainer';
import NavBarContainer from './components/NavBar/NavBarContainer';
import NewsContainer from './components/News/NewsContainer';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
    return (
        <div className={s.appWrapper}>
            <Header className={s.header}/>
            <NavBarContainer/>
            <div className={s.content}>
                <Route exact path={'/'} render={() => <Profile/>}/>

                <Route path={'/dialogs'} render={() => <DialogsWrapperContainer />}/>
                <Route path={'/profile'} render={() => <Profile/>}/>
                <Route path={'/users'} render={() => <UsersContainer />}/>
                <Route path={'/news'} render={() => <NewsContainer />}/>
            </div>
        </div>
    );
}
export default App;
