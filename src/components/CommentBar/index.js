import React,{useContext,useEffect} from 'react';
import {Grid,TextField,Typography, Link,Button,makeStyles} from '@material-ui/core';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import {styles} from './CommentBar.style';

const CommentBar=()=>{
    const classes = styles();
    return(
        <Grid className={classes.likeContainer}>
            <Grid xs={2} className={classes.likeContainer}>
                <ThumbUpAltOutlinedIcon/>
                <Typography className={classes.typography} variant="body2">382 likes</Typography>
            </Grid>
            <Grid xs={2} className={classes.likeContainer}>
                <ModeCommentOutlinedIcon/>
                <Typography className={classes.typography} variant="body2">5 responses</Typography>
                {/* <Typography className={classess.typography} variant="body2"></Typography> */}
            </Grid>
        </Grid>
    )
}

export default CommentBar;