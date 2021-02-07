import { makeStyles } from '@material-ui/core/styles';
import styled from "styled-components";

export const styles = makeStyles({
    header: {
        color: 'black',
        backgroundColor: 'white',
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
      }
})

  export const NavLogo = styled.img`
  width: 60px;
  float:left;
  margin-left:2rem;
` 