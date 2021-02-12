import { useRef, useContext, useEffect } from 'react';
import { StoriesNavbar } from '../../components/StoriesNavbar';
import { Grid, TextField, Typography, Link, Button, makeStyles } from '@material-ui/core';
import { styles, HeaderImage } from '../../components/PostDetailComp/PostDetail.style'
import {Context} from '../../router/Router';

import {PostDetailComp} from '../../components/PostDetailComp';

const PostDetail = () => {
    const classes = styles();
    const consumer = useContext(Context)
    console.log("consumer",consumer)
    // useEffect(() => {
    //     console.log("consumer?.post?.title",consumer?.post);
    // },[])
    return (
        <Grid container className={classes.container}>
            <StoriesNavbar/>
            <PostDetailComp 
                post={consumer?.post} 
                like={consumer?.like}
                comments={consumer?.comments}
                createDeleteLike = {consumer.createDeleteLike}
                setNewComment={consumer.setNewComment}
                createComment={consumer.createComment}
                length={consumer?.comments?.length}
            />

        </Grid>
    )
}
export default PostDetail;