import {React,useContext,useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Menu from '@material-ui/core/Menu';
import {styles,NavLogo} from './StoriesNavbar.style'
import logo2 from '../../assets/logo2.png'
import {Grid,Link,Button,makeStyles,Typography} from '@material-ui/core'
import {Context} from '../../router/Router';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';

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

export function StoriesNavbar() {
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
      <AppBar position="fixed" className={classes.header}>
        <Toolbar>
            <Grid container>
                  <Grid item xs={12} md={6} className={classes.username}>
                    <Link href="/" variant="h5">Ömer.</Link>
                    <Link href="/" variant="body2" className={classes.about}>About</Link>
                  </Grid>
                  <Grid item xs={6} md={4} className={classes.email}>
                    <Button>{localStorage.getItem("email")}</Button>  
                  </Grid>
                  <Grid item xs={6} md={2}>
                    <Link href="/"><NavLogo src={logo2}/></Link> 
                  </Grid>
            </Grid>
        </Toolbar>
      </AppBar>
  );
}
