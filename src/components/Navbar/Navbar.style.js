import { makeStyles } from '@material-ui/core/styles';
import styled from "styled-components";

export const styles = makeStyles({
    header: {
        color: 'black',
        backgroundColor: '#FFC017',
        borderBottom:"1px solid black"
      },
      link:{
          marginRight:"2rem",
      },
      getStarted:{
        backgroundColor:"black",
        color:"white",
        textTransform: "none"
      }
})

  export const NavLogo = styled.img`
  width: 150px;
  float:left;
  margin-left:2rem;
` 