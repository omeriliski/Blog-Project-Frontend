import React,{useContext} from 'react';
import {Grid,TextField,Typography, Link,Button,makeStyles} from '@material-ui/core';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import {styles} from './CommentBar.style';
import { useHistory } from "react-router-dom";
import {Context} from '../../router/Router';

const CommentBar=({likesCount,commentsCount,post,createDeleteLike})=>{
    const classes = styles();
    const consumer = useContext(Context);
    let history = useHistory();
    return(
        <Grid className={classes.likeContainer}>
            <Grid item xs={2} className={classes.likeContainer}>
                <Button onClick={()=>createDeleteLike(post.id)}><ThumbUpAltOutlinedIcon/></Button>
                <Typography className={classes.typography} variant="body2">{likesCount} likes</Typography>
            </Grid>
            <Grid item xs={2} className={classes.likeContainer}>
                <ModeCommentOutlinedIcon/>
                <Typography className={classes.typography} variant="body2">{commentsCount} responses</Typography>
                {/* <Typography className={classess.typography} variant="body2"></Typography> */}
            </Grid>
            <Button onClick={()=>{
                history.push({
                    pathname:"/edit-post",
                    state:{postId:consumer?.post?.id}
                })
            }} 
            >Edit Post</Button>
        </Grid>
    )
}

export default CommentBar;