import React from 'react';
import s from './GamesContainer.module.css'
import CanvasContainer from './Canvas/CanvasContainer';
import GamesListContainer from './GamesList/GamesListContainer';

const GamesContainer = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.list}>
                <GamesListContainer/>
            </div>
            <div className={s.canvas}>
                <CanvasContainer/>
            </div>
        </div>
    );
};

export default GamesContainer;