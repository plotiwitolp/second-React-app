import React from 'react';

const News = (props) => {

    const newsElements = props.state.news.map(n => <div key={n.id}>{n.news}</div>)

    return (
        <div>
            {newsElements}
        </div>
    );
};

export default News;