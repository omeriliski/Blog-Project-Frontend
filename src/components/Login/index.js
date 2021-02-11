import React,{useContext} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button, TextField, Grid, Container } from "@material-ui/core";
import { styles, Image, Header, Paragraph } from './Login.style.js';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useHistory } from "react-router-dom";
import {Context} from '../../router/Router';
import {postData} from '../../helper/postData'
import logo from "../../assets/logo.png"
import axios from  'axios';

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

export default function Login() {
    const classes = useStyles();
    let history = useHistory();
    const consumer = useContext(Context);

    const onFinish = (values) => {
        consumer.signIn(formik);
        // axios.post("https://mein-blog-projekt.herokuapp.com/auth/login/", {
        //   email:formik.values.Email,
        //   password:formik.values.Password
        // })
        //     .then((data) => {
        //         localStorage.setItem("token", data.data.key);
        //         localStorage.setItem("email", formik.values.Email);
        //         console.log("token", data.data.key);
        //         console.log("currentUser", formik.values);
        //         consumer.handleCloseLogin();
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //         alert("Wrong Password or username", err);
        //         // consumer.snackBarHandleClick();
        //         // toast(err?.message || "An error occured");
        //     });
    };
    const formik = useFormik({
        initialValues: {
            Email: "",
            Password: "",
        },
        validationSchema: Yup.object().shape({
            Email: Yup.string().email('Invalid Email address').required('Required'),
            Password: Yup.string()
                .required('Required')
                .min(6, 'Must be 6 characters or more'),
        }),
        onSubmit: () => {
            onFinish();
            console.log("Success");
        },
    });

    const signupStyles = styles();

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={consumer.openLogin}
        onClose={consumer.handleCloseLogin}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={consumer?.openLogin}>
          <div className={classes.paper}>
          <Container className={signupStyles.wrapper} maxWidth="xs">
            <Image src={logo}/>
            <form
                //onFinish={onFinish} 
                // onFinishFailed={onFinishFailed}
                onSubmit={formik.handleSubmit}
            >

                <Grid className={signupStyles.registerContainer} container spacing={3}>
                    <Grid item className={signupStyles.inputs} xs={10}>
                        <Header>Sign-In</Header>
                    </Grid>
                    <Grid item className={signupStyles.inputs} xs={10}>
                        <TextField
                            name="Email"
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            fullWidth
                            size="small"
                            value={formik.values.Email}
                            onChange={formik.handleChange}
                            error={formik.errors.Email}
                            helperText={formik.errors.Email}
                        />
                    </Grid>
                    <Grid item className={signupStyles.inputs} xs={10}>
                        <TextField
                            name="Password"
                            id="outlined-basic"
                            type="Password"
                            label="Password"
                            variant="outlined"
                            fullWidth
                            size="small"
                            value={formik.values.Password}
                            onChange={formik.handleChange}
                            error={formik.errors.Password}
                            helperText={formik.errors.Password}
                        />
                    </Grid>
                    <Grid item className={signupStyles.inputs} xs={10}>
                        <Button className={signupStyles.button}
                            type="Submit"
                            variant="contained"
                            size="small"
                            fullWidth
                            >
                            Sign-In
                    </Button>
                    </Grid>
                </Grid>
            </form>
            <Grid className={signupStyles.newSpan}>
                <span>New to Medium?</span>
                <Button
                    className={signupStyles.routetoRegister}
                    fullWidth
                    onCli
                    onClick={()=>consumer.handleOpenRegister()}
                >Create your Medium account
                </Button>
            </Grid>
            {/* <SnackBar /> */}
        </Container>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}