import {connect} from 'react-redux';
import Users from './Users';

const mapStateToProps = (state) =>{
    return {
        usersData: state.usersData
    }
}
const UsersContainer = connect(mapStateToProps)(Users)
export default UsersContainer;