import {StoriesNavbar} from '../../components/StoriesNavbar';
import {useRef,useContext} from 'react';
import {Grid,TextField,Typography, Link,Button,makeStyles} from '@material-ui/core';
import {styles} from './Userstories.style'
import {Context} from '../../router/Router';
import {SelectCategories} from '../../components/Select';


const UsersStories=()=>{
    const consumer = useContext(Context)
    const classes = styles();
    return(
        <>
            <Grid container>
                <StoriesNavbar/>
                <Grid item xs={2} className={classes.categories}>
                    <SelectCategories/>
                </Grid>
                <Grid item xs={8} className={classes.container}>
                    <Typography></Typography>
                </Grid>
            </Grid>
        </>
    )
}
export default UsersStories;