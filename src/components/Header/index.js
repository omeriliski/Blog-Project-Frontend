import {Grid,Link,Button,makeStyles, Typography} from '@material-ui/core'
import {styles} from './Header.style'

const Header=()=>{
    const classes = styles();
    return(
        <Grid className={classes.container}>
            <Grid item xs={12} md={6} className={classes.containerLeft}>
                <Typography className={classes.text}>Read and share new perspectives on just about any topic. Everyone’s welcome.
                    <Link className={classes.link} underline="always" href="#" color="inherit">Learn More</Link>
                </Typography>
                <Button className={classes.getStarted} variant="outlined" size="large" >Get Started</Button>
            </Grid>
            <Grid item xs={12} md={6}>
            </Grid>
        </Grid>
    )
}

export default Header