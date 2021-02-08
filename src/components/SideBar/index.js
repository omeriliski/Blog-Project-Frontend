import React,{useContext} from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {Grid,TextField,Typography, Link,Button,makeStyles} from '@material-ui/core';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import {styles,HeaderImage} from './Sidebar.style'
import {Context} from '../../router/Router';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function SideBar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });
  const classe = styles();
  const consumer = useContext(Context);

  const toggleDrawer = (anchor, open) => (event) => {
    consumer.getComments();
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          {consumer?.comments?.map((comment)=>{
              return <Typography>{comment}</Typography>
          })
          }
        {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))} */}
      </List>
    </div>
  );
  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
            <Grid className={classe.likeContainer}>
                <Grid xs={2} className={classe.likeContainer}>
                     <ThumbUpAltOutlinedIcon/>
                     <Typography className={classe.typography} variant="body2">382 likes</Typography>
                </Grid>
                <Grid xs={2} className={classe.likeContainer}>
                     <ModeCommentOutlinedIcon/>
                    <Button onClick={toggleDrawer(anchor, true)}>
                        <Typography className={classe.typography} variant="body2">5 responses</Typography>
                    </Button>
                     {/* <Typography className={classes.typography} variant="body2"></Typography> */}
                </Grid>
            </Grid>

          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
