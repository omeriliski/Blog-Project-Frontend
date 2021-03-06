import {React} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Moment from 'moment'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    marginLeft:"5rem",
    textAlign:"left"
  },
});

export default function SimpleCard({data}) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {data?.author}
        </Typography>
        <Typography style={{textTransform:"none"}} variant="button">
            <b>{data?.title}</b>
        </Typography>
        <Typography className={classes.pos} variant="body2" color="textSecondary" display="block">
            {Moment(data?.publish_date).format('MMM d')}
        </Typography>
      </CardContent>
    </Card>
  );
}
