import React,{useContext,useEffect} from 'react';
import {Grid,TextField,Typography, Link,Button,makeStyles} from '@material-ui/core';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import {styles} from './CommentBar.style';
import Context from '../../router/Router';


const CommentBar=({likesCount,commentsCount,postId,createDeleteLike})=>{
    const classes = styles();
    const consumer = useContext(Context);
    
    return(
        <Grid className={classes.likeContainer}>
            <Grid xs={2} className={classes.likeContainer}>
                <Button onClick={()=>createDeleteLike(postId)}><ThumbUpAltOutlinedIcon/></Button>
                <Typography className={classes.typography} variant="body2">{likesCount} likes</Typography>
            </Grid>
            <Grid xs={2} className={classes.likeContainer}>
                <ModeCommentOutlinedIcon/>
                <Typography className={classes.typography} variant="body2">{commentsCount} responses</Typography>
                {/* <Typography className={classess.typography} variant="body2"></Typography> */}
            </Grid>
            <Link href="/edit-post">Edit Post</Link>
        </Grid>
    )
}

export default CommentBar;