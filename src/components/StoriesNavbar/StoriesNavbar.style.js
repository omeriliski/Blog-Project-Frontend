import { makeStyles } from '@material-ui/core/styles';
import styled from "styled-components";

export const styles = makeStyles({
    header: {
        color: 'black',
        backgroundColor: 'white',
        paddingLeft:"2rem"
      },
      link:{
          marginRight:"2rem",
      },
      getStarted:{
        backgroundColor:"black",
        color:"white",
        textTransform: "none"
      },
      publishButton:{
        // backgroundColor:"green",
        background: 'linear-gradient(45deg, green 30%, #4caf50 90%)',
        textTransform: "none",
        color:"white"
      },
      moreIcon:{
        marginLeft:"20px",
        color:"gray",
      },
      username:{
        display:"flex",
        justifyContent:"flex-start"
      },
      email:{
        display:"flex",
        justifyContent:"flex-end",
      },
      about:{
        paddingTop:".4rem", 
        color:"gray", 
        marginLeft:"5rem"
      }
})

  export const NavLogo = styled.img`
  width: 60px;
  float:left;
  margin-left:2rem;
` 