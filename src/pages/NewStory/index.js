import {useRef,useContext} from 'react';
import {PrivateNavbar} from '../../components/PrivatNavbar';
import {Grid,TextField} from '@material-ui/core';
import {styles} from './NewStory.style'
import {Context} from '../../router/Router';
import {SelectCategories} from '../../components/Select';

const NewStory=()=>{
    const consumer = useContext(Context)
    const classes = styles();
    const title = useRef(null);
    const content = useRef(null);
    return(
        <Grid container>
            <PrivateNavbar/>
            <Grid item xs={2} className={classes.categories}>
                <SelectCategories/>
            </Grid>
            <Grid item xs={8} className={classes.container}>
                <TextField  onChange={(e)=>consumer.setTitle(e.target.value)} fullWidth id="standard-basic"  placeholder="Title"/>
                <TextField onChange={(e)=>consumer.setContent(e.target.value)} multiline fullWidth id="outlined-multiline-static"  placeholder="Text" rows="35"/>
            </Grid>
        </Grid>
    )
}

export default NewStory;
