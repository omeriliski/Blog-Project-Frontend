import {React,useContext,useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Menu from '@material-ui/core/Menu';
import {styles,NavLogo} from './PrivateNavbar.style'
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

export function PrivateNavbar() {
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
                <Grid item xs={12} md={6}>
                  <Grid item xs={6} md={4}>
                    <Link href="/"><NavLogo src={logo2}/></Link> 
                    <Typography style={{paddingTop:"5px", color:"gray"}} variant="body2" gutterBottom>Draft in Ömer.</Typography>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Button href="/users-stories" onClick={()=>consumer.savePost()} className={classes.publishButton} variant="contained" size="small" >Publish</Button>
                    <Button><MoreHorizIcon className={classes.moreIcon}/></Button>
                    <Button><NotificationsNoneOutlinedIcon style={{color:"gray"}}/></Button>
                    <Link href="/profile">{localStorage.getItem("email")}</Link>
                  </Grid>
            </Grid>
        </Toolbar>
      </AppBar>
  );
}
