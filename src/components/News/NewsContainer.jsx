import React from 'react';
import {addNewsTextAC, updateNewsTextAC} from '../../redux/news-reducer';
import News from './News';
import StoreContext from '../../StoreContext';

const NewsContainer = (props) => {

    return (
        <StoreContext>
            {store=>{
            const onNewsText = (text) => {
                store.dispatch(updateNewsTextAC(text))
            }
            const addNews = () => {
                store.dispatch(addNewsTextAC())
            }
            return (
                <News state={store.getState().newsData}
                      onNewsText={onNewsText}
                      addNews={addNews}/>
            )
        }}
        </StoreContext>
    );
}
export default NewsContainer;