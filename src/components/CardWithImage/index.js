import React,{useContext} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import {CardContent,Typography,CardMedia,Button} from '@material-ui/core';
import Moment from 'moment'
import {Context} from '../../router/Router';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop:"20px",
    
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    
  },
  content: {
    flex: '1 0 auto',
    
  },
  cover: {
    width: "500px",
  }
}));

export default function MediaControlCard({data}) {
  const classes = useStyles();
  const theme = useTheme();
  const consumer= useContext(Context); 
  let history = useHistory();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography align="left" variant="subtitle1" color="textSecondary">
            {data?.author}
          </Typography>
          <Typography align="left" component="h6" variant="h6">
            <b>{data?.title}</b>
          </Typography>
          <Typography  onClick={()=>console.log("Card Clicked")} align="left" variant="subtitle2" color="textSecondary">
            {data?.content?.length > 150 ? data?.content?.substring(0, 147) + "..." : data?.content}
          </Typography>
          {/* <Link  onClick={()=> consumer.getPostDetails(data?.id)} href="/post-detail">More</Link> */}
          <Button onClick={()=>{
                consumer.getPostDetails(data?.id) 
                history.push("/post-detail")
              }}>More</Button>
          <Typography align="left" variant="body2" color="textSecondary">
            {Moment(data?.publish_date).format('MMM d YYYY')}
          </Typography>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image={data.image}
        title="Live from space album cover"
      />
    </Card>
  );
}
