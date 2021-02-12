// import { useRef, useContext, useEffect } from 'react';
// import { StoriesNavbar } from '../../components/StoriesNavbar';
// import { Grid, TextField, Typography, Link, Button, makeStyles } from '@material-ui/core';
// import { styles, HeaderImage } from '../../components/PostDetailComp/PostDetail.style'
// import {Context} from '../../router/Router';
// import {SelectCategories} from '../../components/Select';

// const EditPost = () => {
//     const classes = styles();
//     const consumer = useContext(Context)
//     console.log("consumer?.post?.title",consumer)
//     return (
//         <Grid container className={classes.container}>
//             <StoriesNavbar/>
//             <Grid item xs={2} className={classes.categories}>
//                 <SelectCategories/>
//             </Grid>
//             <Grid item xs={8} className={classes.container}>
//                 <Typography>asdadasd</Typography>
//                 <Typography>{consumer?.post?.title}</Typography>
//                 <TextField  value={consumer?.post?.title} onChange={(e)=>consumer.setTitle(e.target.value)} fullWidth id="standard-basic"  placeholder="Title"></TextField>
//                 <TextField onChange={(e)=>consumer.setContent(e.target.value)} multiline fullWidth id="outlined-multiline-static"  placeholder="Text" rows="35"></TextField>
//             </Grid>
//         </Grid>
//     )
// }
// export default EditPost;


import { useRef, useContext, useEffect } from 'react';
import { StoriesNavbar } from '../../components/StoriesNavbar';
import { Grid, TextField, Typography, Link, Button, makeStyles } from '@material-ui/core';
import { styles, HeaderImage } from '../../components/PostDetailComp/PostDetail.style'
import {Context} from '../../router/Router';

import {PostDetailComp} from '../../components/PostDetailComp';

const EditPost = () => {
    const classes = styles();
    const consumer = useContext(Context)
    console.log("consumer",consumer)
    // useEffect(() => {
    //     console.log("consumer?.post?.title",consumer?.post);
    // },[])
    return (
        <Grid container className={classes.container}>
            <StoriesNavbar/>
            <Typography>Edit Page</Typography>
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
export default EditPost;