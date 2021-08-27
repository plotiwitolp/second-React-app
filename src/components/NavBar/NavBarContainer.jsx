import NavBar from './NavBar';
import {connect} from 'react-redux';

const mapStateToProps = (state) =>{
    return  {
        sidebarData: state.sidebarData
    }
}
const mapDispatchToProps = () =>{
    return  {

    }
}
const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar)
export default NavBarContainer