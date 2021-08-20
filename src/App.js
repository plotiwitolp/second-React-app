import s from './App.module.css';
import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import Users from './components/Users/Users';
import News from './components/News/News';

const App = (props) => {

    const ProfilePage = () => (<Profile state={props.state.profileData}
                                        addPost={props.addPost}
                                        updatePostText={props.updatePostText}/>)

    return (
            <div className={s.appWrapper}>
                <Header className={s.header}/>
                <Navbar className={s.navbar} state={props.state.sidebarData}/>
                <div className={s.content}>
                    <Route exact path={'/'} render={ProfilePage}/>

                    <Route path={'/dialogs'} render={() => <Dialogs state={props.state.dialogsData}
                                                                    addMessage={props.addMessage}
                                                                    updateMyText={props.updateMyText}/>}/>
                    <Route path={'/profile'} render={ProfilePage}/>
                    <Route path={'/users'} render={() => <Users state={props.state.usersData}/>}/>
                    <Route path={'/news'} render={() => <News state={props.state.newsData}/>}/>
                </div>
            </div>
    );
}
export default App;
