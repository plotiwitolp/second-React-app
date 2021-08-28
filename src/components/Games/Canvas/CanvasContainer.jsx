import React from 'react';
import {Route} from 'react-router-dom';
import TicTacToeGame from '../Games/TicTacToeGame';
import s from './../GamesContainer.module.css'

const CanvasContainer = () => {
    return (
        <div className={s.canvasContainerWrapper}>
            <Route path={'/games/TicTacToeGame'} render={() => <TicTacToeGame/>}/>
            <Route path={'/games/game2'} render={() => <> Game 2</>}/>
            <Route path={'/games/game3'} render={() => <> Game 3</>}/>
        </div>
    );
};

export default CanvasContainer;