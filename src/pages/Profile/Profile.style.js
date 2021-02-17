import { makeStyles } from '@material-ui/core/styles';
import styled from "styled-components";
import image from '../../assets/medium.jpg'

export const styles = makeStyles({
    container:{
        margin:"8rem 5rem 5rem 5rem",
    },
    about:{
      marginBottom:"2rem",
      display:"inline",
      marginRight:"2rem"
    },
    text:{
      padding:"2rem"
    },
    foto:{
      paddingTop:"2rem"
    },
    aboutText:{
      marginTop:"2rem"
    },
    userName:{
      color:"#FFC118",
      marginLeft:"1rem"
    }
})


export const Image = styled.img`
  width: 200px;
` 