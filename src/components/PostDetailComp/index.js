import {useContext,useEffect} from 'react';
import CommentBar from '../../components/CommentBar';
import Comment from '../../components/Comment';
import { Grid, TextField, Typography, Link, Button, makeStyles } from '@material-ui/core';
import { styles, HeaderImage } from '../../components/PostDetailComp/PostDetail.style'
import {Context} from '../../router/Router';

export const PostDetailComp=()=>{
    const classes = styles();
    const consumer = useContext(Context);
    return(
            <Grid container className={classes.postContainer}>
                <Grid item xs={2}></Grid>
                <Grid item xs={8}>
                    <Typography variant="h5">{consumer?.post?.title}</Typography>
                    <Typography>{consumer?.post?.author} </Typography>
                    <HeaderImage src={consumer?.post?.image}></HeaderImage>
                    <Typography align="justify">{consumer?.post?.content}</Typography><br />
                    <Grid>
                        <CommentBar 
                            // likesCount={consumer?.like} 
                            // commentsCount={consumer?.comments?.length} 
                            // post={consumer.post}
                            // createDeleteLike = {createDeleteLike}
                        />
                        <TextField  onChange={(e)=>consumer.setNewComment(e.target.value)} fullWidth id="standard-basic"  placeholder="What are your thoughts?"/>
                        <Button onClick={()=>consumer.createComment(consumer?.post?.id)}>Save</Button>
                    </Grid>
                    <Grid>
                        {
                            consumer?.comments?.map((com) => {
                               return <Comment comment={com}/>
                            })
                        }
                    </Grid>
                </Grid>
            </Grid>
    )
}