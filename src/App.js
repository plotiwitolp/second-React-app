import s from './App.module.css';
import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

const App = () => {
    return (
        <div className={s.appWrapper}>
            <Header className={s.header}/>
            <Navbar className={s.navbar}/>
            <Profile  className={s.content} />
        </div>
    );
}


export default App;
