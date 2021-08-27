import React from 'react';

const News = (props) => {
    const newsElements = props.newsData.news.map(n => <div key={n.id}>{n.news}</div>)
    const onNewsText = (event) => {
        let text = event.target.value
        props.onNewsText(text)
    }
    const addNews = () => {
        props.addNews()
    }
    return (
        <div>
            <div>{newsElements}</div>
            <div>
                <textarea onChange={onNewsText} value={props.newsData.newsText} placeholder={'Enter your news'}/>
                <button onClick={addNews}>add news</button>
            </div>
        </div>
    );
}
export default News;