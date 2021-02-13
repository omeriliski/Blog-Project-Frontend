import { useContext, useEffect } from 'react';
import { StoriesNavbar } from '../../components/StoriesNavbar';
import { Grid } from '@material-ui/core';
import { styles } from '../../components/PostDetailComp/PostDetail.style'
import {Context} from '../../router/Router';
import {PostDetailComp} from '../../components/PostDetailComp';

const PostDetail = (props) => {
    const classes = styles();
    const consumer = useContext(Context)

   useEffect(() => {
        consumer.getPostDetails(localStorage.getItem("currentPostId"));
        console.log("postId postDETAIL PAGE",consumer.currentPostId)
   }, [])
    return (
        <Grid container className={classes.container}>
            <StoriesNavbar/>
            <PostDetailComp/>
        </Grid>
    )
}
export default PostDetail;