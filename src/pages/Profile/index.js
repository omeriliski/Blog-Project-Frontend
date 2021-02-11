import {useContext} from 'react';
import {Grid,TextField,Typography, Link,Button,makeStyles} from '@material-ui/core';
import {StoriesNavbar} from '../../components/StoriesNavbar';
import Context from '../../router/Router';

const Profile=()=>{
    const consumer = useContext(Context); 
    return(
        <Grid container>
            <StoriesNavbar/>
            <Grid item>
                <Grid xs={6} md={12}>
                    <Typography variant="h4">About </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default Profile;