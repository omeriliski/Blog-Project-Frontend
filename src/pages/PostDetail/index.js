import { useRef, useContext, useEffect } from 'react';
import { StoriesNavbar } from '../../components/StoriesNavbar';
import { Grid, TextField, Typography, Link, Button, makeStyles } from '@material-ui/core';
import { styles, HeaderImage } from './PostDetail.style'
import { Context } from '../../router/Router';
import CommentBar from '../../components/CommentBar';
import Comment from '../../components/Comment';
const PostDetail = () => {

    const consumer = useContext(Context)
    const classes = styles();
    // useEffect(() => {
    //     console.log("consumer?.post?.title",consumer?.post);
    // },[])
    return (
        <Grid container className={classes.container}>
            <StoriesNavbar />
            <Grid container className={classes.postContainer}>
                <Grid item xs={2}></Grid>
                <Grid item xs={8}>
                    <Typography variant="h5">{consumer.post?.title}</Typography>
                    <Typography>{consumer.post?.author} </Typography>
                    <HeaderImage src={consumer.post?.image}></HeaderImage>
                    <Typography align="justify">{consumer.post?.content}</Typography><br />
                    <Grid>
                        <CommentBar 
                            likesCount={consumer?.like} 
                            commentsCount={consumer?.comments?.length} 
                            postId={consumer?.post?.id}
                            createDeleteLike = {consumer.createDeleteLike}
                        />
                        <TextField  onChange={(e)=>consumer.setNewComment(e.target.value)} fullWidth id="standard-basic"  placeholder="What are your thoughts?"/>
                        <Button onClick={()=>consumer.createComment(consumer?.post?.id)}>Save</Button>
                    </Grid>
                    <Grid>
                        {
                            consumer?.comments?.map((comment) => {
                               return <Comment comment={comment}/>
                            })
                        }
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    )
}
export default PostDetail;