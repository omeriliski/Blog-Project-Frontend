import {StoriesNavbar} from '../../components/StoriesNavbar';
import {useRef,useContext,useEffect} from 'react';
import {Grid,TextField,Typography, Link,Button,makeStyles} from '@material-ui/core';
import {styles,HeaderImage} from './Userstories.style'
import {Context} from '../../router/Router';
import {SelectCategories} from '../../components/Select';
import MediaControlCard from '../../components/CardWithImage';

const UsersStories=()=>{

    const consumer = useContext(Context)
    const classes = styles();
    
    useEffect(() => {
        consumer.getUsersPosts();
    },[])
    return(
            <Grid container className={classes.container}>
                
                <StoriesNavbar/>
                <Grid item xs={8} className={classes.container}>

                {
                    consumer?.usersPosts?.map((post)=>{
                        return (
                            <MediaControlCard data={post}/>
                            // <Grid container className={classes.postContainer}>
                            // <Grid item xs={2}></Grid>
                            // <Grid item xs={8}>
                            //    <Typography variant="h5">{post?.title}</Typography>
                            //    <Typography>{post?.author} </Typography>
                            //    <HeaderImage src={post?.image}></HeaderImage>
                            //    <Typography align="justify">{post?.content}</Typography><br/>
                            
                            
                            // </Grid>
                            // </Grid>
                            )
                        })
                    }
                </Grid>
                
            </Grid>
    )
}
export default UsersStories;