import {addNewsTextAC, updateNewsTextAC} from '../../redux/news-reducer';
import News from './News';
import {connect} from 'react-redux';

const mapStateToProps = (state)=>{
    return {
        newsData: state.newsData
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        onNewsText: (text)=>{dispatch(updateNewsTextAC(text))},
        addNews: ()=>{dispatch(addNewsTextAC())}
    }
}
const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News)
export default NewsContainer;