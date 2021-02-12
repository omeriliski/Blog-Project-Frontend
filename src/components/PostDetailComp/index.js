import CommentBar from '../../components/CommentBar';
import Comment from '../../components/Comment';
import { Grid, TextField, Typography, Link, Button, makeStyles } from '@material-ui/core';
import { styles, HeaderImage } from '../../components/PostDetailComp/PostDetail.style'

export const PostDetailComp=({post,like,comments,length,createDeleteLike,setNewComment,createComment})=>{
    const classes = styles();
    return(
            <Grid container className={classes.postContainer}>
                <Grid item xs={2}></Grid>
                <Grid item xs={8}>
                    <Typography variant="h5">{post?.title}</Typography>
                    <Typography>{post?.author} </Typography>
                    <HeaderImage src={post?.image}></HeaderImage>
                    <Typography align="justify">{post?.content}</Typography><br />
                    <Grid>
                        <CommentBar 
                            likesCount={like} 
                            commentsCount={length} 
                            postId={post?.id}
                            createDeleteLike = {createDeleteLike}
                        />
                        <TextField  onChange={(e)=>setNewComment(e.target.value)} fullWidth id="standard-basic"  placeholder="What are your thoughts?"/>
                        <Button onClick={()=>createComment(post?.id)}>Save</Button>
                    </Grid>
                    <Grid>
                        {
                            comments?.map((com) => {
                               return <Comment comment={com}/>
                            })
                        }
                    </Grid>
                </Grid>
            </Grid>
    )
}