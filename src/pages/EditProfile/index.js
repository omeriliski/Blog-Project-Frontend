import { useRef, useContext, useEffect } from 'react';
import { StoriesNavbar } from '../../components/StoriesNavbar';
import { Grid, TextField, Typography, Link, Button, makeStyles } from '@material-ui/core';
import { styles } from './EditProfile.style';
import { Context } from '../../router/Router';
import { useFormik } from 'formik';
import { useHistory } from "react-router-dom";

const EditProfile = (props) => {
    const classes = styles();
    const consumer = useContext(Context)
    let history = useHistory();

    const formik = useFormik({
        initialValues: {
            image: consumer?.profile?.image,
            bio: consumer?.profile?.bio,
        },
        onSubmit: () => {
            consumer.updateProfile(formik);
            history.push("/profile");
        },
    });
    useEffect(() => {
        consumer.getProfile();
        console.log("Editprofile",consumer?.profile);
    }, [])
    return (
        <Grid container className={classes.container}>
            <StoriesNavbar />
            <Grid item xs={8} className={classes.item}>
            <form onSubmit={formik.handleSubmit}>
               
                     <TextField
                        name="image"
                        id="image"
                        fullWidth
                        value={formik.values.image}
                        onChange={formik.handleChange}
                    />
                    <TextField
                        name="bio"
                        id="bio"
                        multiline
                        fullWidth
                        rows="35"
                        value={formik.values.bio}
                        onChange={formik.handleChange}
                    />
                   
                    <Button type="Submit">Save</Button>
                </form>
            </Grid>

        </Grid>
    )
}
export default EditProfile;


