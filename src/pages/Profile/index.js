import {useContext,useEffect} from 'react';
import {Grid,TextField,Typography, Link,Button,makeStyles} from '@material-ui/core';
import {StoriesNavbar} from '../../components/StoriesNavbar';
import {Context} from '../../router/Router';
import { styles,Image } from './Profile.style'


const Profile=()=>{
    const classes = styles();
    const consumer = useContext(Context)
   
    useEffect(() => {
        consumer.getProfile()
    }, [])
    
    return(
        <Grid container>
            <StoriesNavbar/>
            <Grid container className={classes.container}>
                <Grid item xs={12} md={6} className={classes.text}>
                    <Typography className={classes.about} variant="h4">
                        About<span className={classes.userName}>{consumer?.profile?.user}.</span>
                    </Typography>
                    <Link underline="none" href="/edit-profil" className={classes.edit}>Edit</Link>
                    <Grid item xs={12} className={classes.aboutText}  >
                        <Typography variant="h6"> {consumer?.profile?.bio} </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6} className={classes.foto}>
                    <Image src={consumer?.profile?.image}/>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default Profile;