import { createContext,useEffect,useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {MenuAppBar} from '../components/Navbar';
import HomePage from '../pages/HomPage'
import {fetchData} from '../helper/FetchData';

export const Context=createContext();


const AppRouter=()=>{
    const [posts,setPosts]=useState([]);
    const [postView,setPostview]=useState();

    const getPostView=()=>{
        fetchData()
    }
    useEffect(() => {
        fetchData("https://mein-blog-projekt.herokuapp.com/api/get_posts/")
        .then(res=>{
            setPosts(res.data);
            console.log(res.data);
        })
        .catch(err=>console.log(err))
    }, [])
    return(
        <Context.Provider value={posts}>
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