import s from './App.module.css';
import React from 'react';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import DialogsWrapper from './components/Dialogs/DialogsWrapper';
import {Route} from 'react-router-dom';
import Users from './components/Users/Users';
import News from './components/News/News';

const App = (props) => {

    const ProfilePage = () => (<Profile state={props.state.profileData}
                                        dispatch={props.dispatch}/>)

    return (
        <div className={s.appWrapper}>
            <Header className={s.header}/>
            <NavBar state={props.state.sidebarData}/>
            <div className={s.content}>
                <Route exact path={'/'} render={ProfilePage}/>

                <Route path={'/dialogs'} render={() => <DialogsWrapper state={props.state.dialogsData}
                                                                       dispatch={props.dispatch}/>}/>
                <Route path={'/profile'} render={ProfilePage}/>
                <Route path={'/users'} render={() => <Users state={props.state.usersData}/>}/>
                <Route path={'/news'} render={() => <News state={props.state.newsData}/>}/>
            </div>
        </div>
    );
}
export default App;
