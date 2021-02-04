import { createContext,useEffect,useState,React } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {MenuAppBar} from '../components/Navbar';
import HomePage from '../pages/HomPage'
import {fetchData} from '../helper/FetchData';
import axios from "axios";
import { useHistory } from "react-router-dom";

export const Context=createContext();


const AppRouter=()=>{
    const [posts,setPosts]=useState([]);
    const [postView,setPostview]=useState();
    const [openLogin, setOpenLogin] = useState(false);
    const [openRegister, setOpenRegister] = useState(false);
    const [currentUser,setCurrentUser] = useState();

    //Login Modal
    const handleOpenLogin = () => {
        setOpenLogin(true);
        handleCloseRegister();
    };
  
    const handleCloseLogin = () => {
        setOpenLogin(false);
    };
    //--------------------------
    //Register Modal
    const handleOpenRegister = () => {
        setOpenRegister(true);
        handleCloseLogin();
    };
    
    const handleCloseRegister = () => {
        setOpenRegister(false);
    };
    //--------------------------
    const getPostView=()=>{
        fetchData()
    }

    const signOut=()=>{
        // axios.post("https://mein-blog-projekt.herokuapp.com/auth/logout/")
        // .then(()=>{
            setCurrentUser(null);
            localStorage.removeItem("token");
            localStorage.removeItem("email");
            console.log("signed out");
        // })
        // .catch(err=>{
        //     console.log(err);
        // })
    } 
    useEffect(() => {
        fetchData("https://mein-blog-projekt.herokuapp.com/api/get_posts/")
        .then(res=>{
            setPosts(res.data);
        })
        .catch(err=>console.log(err))
    }, [])
    return(
        <Context.Provider value={{posts,handleOpenLogin,handleCloseLogin,handleOpenRegister,handleCloseRegister,openLogin,openRegister,
            setCurrentUser,currentUser,signOut
        }}>
            <Router>
                <MenuAppBar/>
                <Switch>
                    <Route path="/" component={HomePage}></Route>
                </Switch>
            </Router>
        </Context.Provider>
    )
}

export default AppRouter