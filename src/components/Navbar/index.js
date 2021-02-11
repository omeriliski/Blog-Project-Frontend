import {React,useContext,useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {styles,NavLogo} from './Navbar.style'
import logo from '../../assets/logo.png'
import {Grid,Link,Button,makeStyles} from '@material-ui/core'
import {Context} from '../../router/Router';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export function MenuAppBar() {
  const classes = styles();
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const consumer = useContext(Context);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
      <AppBar className={classes.header}>
        <Toolbar>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <NavLogo src={logo}/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Link className={classes.link} href="#" variant="body2" color="inherit">Our Story</Link>
                    <Link className={classes.link} href="#" variant="body2" color="inherit">Membership</Link>
                    <Link className={classes.link} href="/new-story" variant="body2" color="inherit">Write</Link>
                    {localStorage.getItem("token") ?
                    <>
                      <Link className={classes.link} onClick={consumer.signOut} href="/" variant="body2" color="inherit">Sign Out</Link>
                      <Link href="/profile">{localStorage.getItem("email")}</Link>
                    </>
                    :<>
                      <Link className={classes.link} onClick={()=>consumer.handleOpenRegister()} href="#" variant="body2" color="inherit">Register</Link>
                       <Button className={classes.getStarted} variant="contained" onClick={()=>consumer.handleOpenLogin()}>Get Started</Button>
                    </>
                    }
                    </Grid>
            </Grid>
        </Toolbar>
      </AppBar>
  );
}
