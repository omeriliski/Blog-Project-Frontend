import React,{useContext} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button, TextField, Grid, Container } from "@material-ui/core";
import { styles, Image, Header, Paragraph } from '../Login/Login.style.js';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useHistory } from "react-router-dom";
import {Context} from '../../router/Router';
import {postData} from '../../helper/postData'
import logo from "../../assets/logo.png"
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    // border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Register() {
    const classes = useStyles();
    let history = useHistory();
    const consumer = useContext(Context);
    const register = () => {
            axios.post("https://mein-blog-projekt.herokuapp.com/users/register/", {
                username: formik.values.yourName,
                email: formik.values.email,
                password: formik.values.password1,
                password2: formik.values.password2
            })
            .then(()=>{
                consumer.handleCloseRegister();
                console.log(formik.values)
                console.log("registered")
            })
        .catch ((error)=> {
            //consumer.setDisabledUser(formik.values);
            // history.push({
            //     pathname:"/inUse",
            //     state:{email:formik.values.email}
            // });
            console.log("not registered")
            console.log(formik.values)
        })
    }
    const formik = useFormik({
        initialValues: {
            yourName: "",
            email: "",
            password1: "",
            password2: ""
        },
        validationSchema: Yup.object().shape({
            yourName: Yup.string().required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            password1: Yup.string()
                .required('Required')
                .min(6, 'Must be 6 characters or more'),
            password2: Yup.string()
                .oneOf([Yup.ref('password1'), null], 'Passwords must match')
                .required('Required')
        }),
        onSubmit: () => {
            register();
        },
    });

    const signupStyles = styles();

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={consumer.openRegister}
        onClose={consumer.handleCloseRegister}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={consumer?.openRegister}>
          <div className={classes.paper}>
          
          <Container className={signupStyles.wrapper} maxWidth="xs">
            <Image src={logo}></Image>
            <form onSubmit={formik.handleSubmit}>
                <Grid className={signupStyles.registerContainer} container spacing={3}>
                    <Grid item className={signupStyles.inputs} xs={10}>
                        <Header>Create account</Header>
                    </Grid>
                    <Grid item className={signupStyles.inputs} xs={10}>
                        <TextField
                            name="yourName"
                            id="yourName"
                            label="Your Name"
                            variant="outlined"
                            size="small"
                            value={formik.values.yourName}
                            onChange={formik.handleChange}
                            error={formik.errors.yourName}
                            helperText={formik.errors.yourName}
                            fullWidth
                        />
                    </Grid>
                    <Grid item className={signupStyles.inputs} xs={10}>
                        <TextField
                            name="email"
                            id="email"
                            label="Email"
                            variant="outlined"
                            fullWidth
                            size="small"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.errors.email}
                            helperText={formik.errors.email}
                        />
                    </Grid>
                    <Grid item className={signupStyles.inputs} xs={10}>
                        <TextField
                            name="password1"
                            id="password1"
                            type="password"
                            label="Password"
                            variant="outlined"
                            fullWidth
                            size="small"
                            value={formik.values.password1}
                            onChange={formik.handleChange}
                            error={formik.errors.password1}
                            helperText={formik.errors.password1}
                        />
                    </Grid>
                    <Grid item className={signupStyles.inputs} xs={10}>
                        <TextField
                            name="password2"
                            id="password2"
                            type="password"
                            label="Re-enter password"
                            variant="outlined"
                            fullWidth
                            size="small"
                            value={formik.values.password2}
                            onChange={formik.handleChange}
                            error={formik.errors.password2}
                            helperText={formik.errors.password2}
                        />
                    </Grid>
                    <Grid item className={signupStyles.inputs} xs={10}>
                        <Button className={signupStyles.button}
                            type="Submit"
                            variant="contained"
                            size="small"
                            fullWidth>
                            Create your Medium account
                    </Button>
                    </Grid>
                    <Grid item className={signupStyles.inputs} xs={10}>
                        <Paragraph>Already have an account?</Paragraph>
                            <Button style={{textTransform:"none"}} variant="contained" color="primary" onClick={()=>consumer.handleOpenLogin()}>Sign-In</Button> 
                    </Grid>
                </Grid>
            </form>
        </Container>

          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default Register;