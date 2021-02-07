import { createContext,useEffect,useState,React } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from '../pages/HomPage'
import {fetchData} from '../helper/FetchData';
import axios from "axios";
import { useHistory } from "react-router-dom";
import NewStory from '../pages/NewStory';
import UsersStories from '../pages/UsersStories';
import {postData} from '../helper/postData';
import {privateFetchData} from '../helper/FetchData';

export const Context=createContext();

const AppRouter=()=>{
    const [posts,setPosts]=useState([]);
    const [postView,setPostview]=useState();
    const [openLogin, setOpenLogin] = useState(false);
    const [openRegister, setOpenRegister] = useState(false);
    const [currentUser,setCurrentUser] = useState();
    const [title,setTitle] = useState();
    const [content,setContent] = useState();
    const [categories,setCategories] = useState();
    const [category,setCategory] = useState();

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
    const getCategories=()=>{
        privateFetchData("https://mein-blog-projekt.herokuapp.com/api/get_categories/",)
        .then((res)=>{
            console.log("res",res);
            setCategories(res);
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    const savePost=()=>{
        postData("https://mein-blog-projekt.herokuapp.com/api/create_post/",{
            title:title,
            content:content,
            image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cyclooil.com%2Fimages%2F&psig=AOvVaw0N6O-AfOMPh3Mn6bzhXLph&ust=1612731828713000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNDdtrGU1u4CFQAAAAAdAAAAABAD",
            category:category,
            author:1
        })
        .then(()=>{
            console.log("saved successfully")
        })
        .catch((err)=>{
            console.log(err);
            console.log(category)
        })
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
            setCurrentUser,currentUser,signOut,savePost,setTitle,setContent,getCategories,categories,setCategory, category
        }}>
            <Router>
                <Switch>
                    <NewStory exact path="/new-story" component={NewStory}></NewStory>
                    <UsersStories exact path="/users-stories" component={UsersStories}></UsersStories>
                    <Route path="/" component={HomePage}></Route>
                </Switch>
            </Router>
        </Context.Provider>
    )
}

export default AppRouter