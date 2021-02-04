import {Grid,Link,Button,makeStyles} from '@material-ui/core'
import Header from '../../components/Header';
import Cards from '../../components/Cards';
import Login from '../../components/Login';
import Register from '../../components/Register';

const HomePage=()=>{
    return(
        <>
            <Header/>
            <Cards/>
            <Login/>
            <Register/>
        </>
    )
}

export default HomePage