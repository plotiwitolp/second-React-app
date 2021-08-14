import s from './App.module.css';
import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import Users from './components/Users/Users';

const App = () => {
    return (
        <BrowserRouter>
            <div className={s.appWrapper}>
                <Header className={s.header}/>
                <Navbar className={s.navbar}/>
                <div className={s.content}>
                    <Route path={'/dialogs'} component={Dialogs}/>
                    <Route path={'/profile'} component={Profile}/>
                    <Route path={'/users'} component={Users}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
