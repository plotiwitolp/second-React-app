import s from './App.module.css';
import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

const App = () => {
    return (
        <div className={s.appWrapper}>
            <Header/>
            <Navbar/>
            <Profile/>
        </div>
    );
}


export default App;
