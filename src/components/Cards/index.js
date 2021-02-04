import {useContext} from 'react'
import SimpleCard from "../Card";
import MediaControlCard from '../CardWithImage';
import {Grid, Typography} from '@material-ui/core'
import {Context} from '../../router/Router';

const Cards=()=>{
    const consumer = useContext(Context);
    return(
        <Grid container>
            <Grid container>
                    {
                        <>
                            <Grid item xs={12} sm={6} md={4}>
                                <SimpleCard data={consumer?.posts?.results?.[0]}/>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <SimpleCard data={consumer?.posts?.results?.[1]}/>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <SimpleCard data={consumer?.posts?.results?.[2]}/>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <SimpleCard data={consumer?.posts?.results?.[3]}/>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <SimpleCard data={consumer?.posts?.results?.[4]}/>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <SimpleCard data={consumer?.posts?.results?.[5]}/>
                            </Grid>
                        </>
                     }
            </Grid>
            <Grid container>
            <Grid style={{marginLeft:"3rem"}} xs={12} md={6} >
                {   
                    consumer?.posts?.results?.map(res=>{
                        return <Grid>
                            <MediaControlCard data={res}/>
                        </Grid>   
                    })
                }
            </Grid>
            {/* <Grid xs={12} md={4}>

            </Grid> */}
            </Grid>
        </Grid>
    )
}
export default Cards;