import { useRef, useContext, useEffect } from 'react';
import { StoriesNavbar } from '../../components/StoriesNavbar';
import { Grid, TextField, Typography, Link, Button, makeStyles } from '@material-ui/core';
import { styles } from './EditPost.style';
import {Context} from '../../router/Router';
import {SelectCategories} from '../../components/Select';
import { useFormik } from 'formik';
import { useHistory } from "react-router-dom";

const EditPost = (props) => {
    const classes = styles();
    const consumer = useContext(Context)
    let history = useHistory();

    const formik = useFormik({
        initialValues: {
            id:consumer?.post?.id,
            title: consumer?.post?.title,
            content: consumer?.post?.content,
            image:consumer?.post?.image,
            category:consumer?.post?.category,
            author:consumer?.post?.author
        },
        // validationSchema: Yup.object().shape({
        //     Email: Yup.string().email('Invalid Email address').required('Required'),
        //     Password: Yup.string()
        //         .required('Required')
        //         .min(6, 'Must be 6 characters or more'),
        // }),
        onSubmit: () => {
            consumer.updatePost(formik);
            console.log("formik",formik);
             history.push({
                  pathname:"/post-detail",
                  state:{postId:formik.values.id}
                })
            console.log("id:!!!!!!!!!",consumer.post.id);
        },
    });
    useEffect(() => {
        console.log("props.location.state",props.location.state.postId)
        consumer.getPostDetails(props.location.state.postId);
    }, [])
    return (
        <Grid container className={classes.container}>
            <StoriesNavbar/>
            <form onSubmit={formik.handleSubmit}>
            <Grid container>
                <Grid container xs={4}>
                    <SelectCategories/>
                </Grid>
                <Grid container xs={8} >
                    {/* <TextField value={post.title} onChange={(e)=>consumer.setTitle(e.target.value)} fullWidth id="standard-basic"  placeholder="Title">editldskfsşdfşs </TextField>
                    <TextField value={post.content} onChange={(e)=>consumer.setContent(e.target.value)} multiline fullWidth id="outlined-multiline-static"  placeholder="Text" rows="35">editldskfsşdfşs</TextField> */}
                    <TextField 
                        name="title"
                        id="title"
                        fullWidth  
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        // error={formik.errors.Email}
                        // helperText={formik.errors.Email}
                        >
                    </TextField>
                    <TextField 
                        name="content"
                        id="content"
                        multiline 
                        fullWidth
                        rows="35"
                        value={formik.values.content}
                        onChange={formik.handleChange}
                        >
                    </TextField> 
                    <Button type="Submit">Save</Button>
                </Grid>
                </Grid>
            </form>
            
        </Grid>
    )
}
export default EditPost;


