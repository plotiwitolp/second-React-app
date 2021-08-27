import s from './App.module.css';
import React from 'react';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import {Route} from 'react-router-dom';
import Users from './components/Users/Users';
import DialogsWrapperContainer from './components/Dialogs/DialogsWrapperContainer';
import NavBarContainer from './components/NavBar/NavBarContainer';
import NewsContainer from './components/News/NewsContainer';

const App = (props) => {
    return (
        <div className={s.appWrapper}>
            <Header className={s.header}/>
            <NavBarContainer/>
            <div className={s.content}>
                <Route exact path={'/'} render={() => <Profile/>}/>

                <Route path={'/dialogs'} render={() => <DialogsWrapperContainer />}/>
                <Route path={'/profile'} render={() => <Profile/>}/>
                <Route path={'/users'} render={() => <Users />}/>
                <Route path={'/news'} render={() => <NewsContainer />}/>
            </div>
        </div>
    );
}
export default App;
