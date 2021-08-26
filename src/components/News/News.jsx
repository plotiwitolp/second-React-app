import React from 'react';
import {addNewsTextAC, updateNewsTextAC} from '../../redux/news-reducer';

const News = (props) => {
    const newsElements = props.state.news.map(n => <div key={n.id}>{n.news}</div>)
    const onNewsText = (event) => {
        let text = event.target.value
        props.dispatch(updateNewsTextAC(text))
    }
    const addNews = () => {
        props.dispatch(addNewsTextAC())
    }
    return (
        <div>
            <div>{newsElements}</div>
            <div>
                <textarea onChange={onNewsText} value={props.state.newsText} placeholder={'Enter your news'}/>
                <button onClick={addNews}>add news</button>
            </div>
        </div>
    );
}
export default News;