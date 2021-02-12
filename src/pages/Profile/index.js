import {useContext,useEffect} from 'react';
import {Grid,TextField,Typography, Link,Button,makeStyles} from '@material-ui/core';
import {StoriesNavbar} from '../../components/StoriesNavbar';
import {Context} from '../../router/Router';
import { styles, HeaderImage } from './Profile.style'


const Profile=()=>{
    const classes = styles();
    const consumer = useContext(Context)
    useEffect(() => {
      console.log("profile",consumer)
      console.log("consumer?.currentUser",consumer?.currentUser)
      console.log("consumer?.currentUser",consumer?.currentUser)
    }, [])
    
    return(
        <Grid container>
            <StoriesNavbar/>
            <Grid item>
                <Grid item xs={6} md={12} className={classes.container} >
                    <Typography variant="h4">About {consumer?.currentUser?.email} </Typography>
                    <Typography variant="h4"> {consumer?.currentUser?.bio} </Typography>
                    <Typography variant="h4"> {consumer?.currentUser?.image} </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default Profile;