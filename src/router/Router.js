import { createContext,useEffect,useState,React } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from '../pages/HomPage'
import {fetchData} from '../helper/FetchData';
import axios from "axios";
import { useHistory } from "react-router-dom";
import NewStory from '../pages/NewStory';
import UsersStories from '../pages/UsersStories';
import PostDetail from '../pages/PostDetail';
import {postData} from '../helper/postData';
import {putData} from '../helper/putData';
import {privateFetchData} from '../helper/FetchData';
import Profile from '../pages/Profile';
import EditProfile from '../pages/EditProfile';
import EditPost from '../pages/EditPost';

export const Context=createContext();

const AppRouter=()=>{
    const [posts,setPosts]=useState([]);
    const [post,setPost]=useState();
    const [postView,setPostview]=useState();
    const [openLogin, setOpenLogin] = useState(false);
    const [openRegister, setOpenRegister] = useState(false);
    const [currentUser,setCurrentUser] = useState();
    const [profile,setProfile] = useState();
    const [title,setTitle] = useState();
    const [content,setContent] = useState();
    const [categories,setCategories] = useState();
    const [category,setCategory] = useState();
    const [usersPosts,setUsersPost]=useState();
    const [comments,setComments]=useState();
    const [newComment,setNewComment]=useState();
    const [like,setLike]=useState();
    const [currentPostId,setCurrentPostId]=useState();


    let history = useHistory();
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

    const signIn=(formik)=>{
        axios.post("https://mein-blog-projekt.herokuapp.com/auth/login/", {
          email:formik.values.Email,
          password:formik.values.Password
        })
        .then((res) => {
            localStorage.setItem("token", res.data.key);
            localStorage.setItem("email", formik.values.Email);
            setCurrentUser(res.config.data);
            handleCloseLogin();
            getProfile();
        })
        .catch((err) => {
            console.log(err)
            alert("Wrong Password or username", err);
            // consumer.snackBarHandleClick();
            // toast(err?.message || "An error occured");
        });
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
    const getProfile=()=>{
        privateFetchData("https://mein-blog-projekt.herokuapp.com/users/get_update_profile/")
        .then(async(res)=>{
            await setProfile(res);
            console.log("profile router:", res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    const updateProfile=()=>{
        putData("https://mein-blog-projekt.herokuapp.com/admin/users/get_update_profile/")
        .then((res)=>{
            console.log("res",res);
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    const getCategories=()=>{
        privateFetchData("https://mein-blog-projekt.herokuapp.com/api/get_categories/",)
        .then((res)=>{
            
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
            //author musst be fixed
        })
        .then(()=>{
            console.log("saved")
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    const updatePost=(postUpdateData)=>{
        putData(`https://mein-blog-projekt.herokuapp.com/api/${postUpdateData.values.id}/update_delete_post/`,{
            title:postUpdateData.values.title,
            content:postUpdateData.values.content,
            image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cyclooil.com%2Fimages%2F&psig=AOvVaw0N6O-AfOMPh3Mn6bzhXLph&ust=1612731828713000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNDdtrGU1u4CFQAAAAAdAAAAABAD",
            category:postUpdateData.values.category,
            author:postUpdateData.values.author
            //author musst be fixed
        })
        .then(()=>{
            console.log("updated",postUpdateData.values);
            
        })
        .catch((err)=>{
            console.log(err,postUpdateData);
        })
    }

    const getUsersPosts=()=>{
        privateFetchData("https://mein-blog-projekt.herokuapp.com/api/get_usersposts/")
        .then((res)=>{
            setUsersPost(res);
        })
        .catch(err=>{
            console.log(err);
        })
    }
    const getComments=(postId)=>{
        //burada hata var!
        let id=post?.id
        privateFetchData(`https://mein-blog-projekt.herokuapp.com/api/${postId}/get_comments/`)
        .then((res)=>{
            setComments(res);
        })
        .catch(err=>{
            console.log(err);  
        })
    }
    const getPostDetails=(postId)=>{
         fetchData(`https://mein-blog-projekt.herokuapp.com/api/${postId}/get_post/`)
         .then((res)=>{
            setPost(res?.data);
            getComments(postId);
            getLikesCount(postId)
        })
        .catch(err=>{
            console.log(err);
        })
    }
    const createComment=(postId)=>{
        postData(`https://mein-blog-projekt.herokuapp.com/api/${postId}/create_comment/`,{
            content:newComment,
            user:1
        })
        .then(()=>{
            console.log("Comment saved");
            getComments(postId);
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    const getLikesCount=(postId)=>{
        privateFetchData(`https://mein-blog-projekt.herokuapp.com/api/${postId}/get_likes/`)
        .then((res)=>{
            setLike(res);
        })
        .catch(err=>{
            console.log(err);  
        })
    }
    const createDeleteLike=(postId)=>{
        postData(`https://dashboard.heroku.com/apps/mein-blog-projekt/${postId}/create_delete_like/`)
        .then((res)=>{
            getLikesCount(postId);
        })
        .catch(err=>{
            console.log(err);  
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
        <Context.Provider value={{signIn,signOut,posts,handleOpenLogin,handleCloseLogin,handleOpenRegister,handleCloseRegister,openLogin,openRegister,
            savePost,setTitle,setContent,getCategories,categories,setCategory, category, usersPosts,currentUser,profile,updatePost,
            getUsersPosts,getComments,comments,getPostDetails,createComment,newComment,setNewComment,like,createDeleteLike,post,
            currentPostId,setCurrentPostId,getProfile,updateProfile
        }}>
            <Router>
                <Switch>
                    <NewStory exact path="/new-story" component={NewStory}></NewStory>
                    <UsersStories exact path="/users-stories" component={UsersStories}></UsersStories>
                    <PostDetail exact path="/post-detail" component={PostDetail}></PostDetail>
                    <Profile exact path="/profile" component={Profile}></Profile>
                    <EditProfile exact path="/edit-profil" component={EditProfile}></EditProfile>
                    <EditPost exact path="/edit-post" component={EditPost}></EditPost>
                    <Route path="/" component={HomePage}></Route>
                </Switch>
            </Router>
        </Context.Provider>
    )
}

export default AppRouter