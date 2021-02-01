import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Moment from 'moment'

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
    width: 450,
  }
}));

export default function MediaControlCard({data}) {
  const classes = useStyles();
  const theme = useTheme();

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
          <Typography align="left" variant="subtitle2" color="textSecondary">
            {data?.content?.length > 150 ? data?.content?.substring(0, 147) + "..." : data?.content}
          </Typography>
          <Typography align="left" variant="subtitle1" color="textSecondary">
            {Moment(data?.publish_date).format('d MMMM')}
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
