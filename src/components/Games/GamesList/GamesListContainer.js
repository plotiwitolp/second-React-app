import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './../GamesContainer.module.css'

const GamesListContainer = () => {
    return (
        <div className={s.gamesList}>
            <NavLink to={'/games/TicTacToeGame'} className={s.linkItem}> Tic-Tac-Toe </NavLink>
            <NavLink to={'/games/game2'} className={s.linkItem}> Game 2</NavLink>
            <NavLink to={'/games/game3'} className={s.linkItem}> Game 3</NavLink>
        </div>
    );
};

export default GamesListContainer;