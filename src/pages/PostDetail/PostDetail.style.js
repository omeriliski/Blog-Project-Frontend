import { makeStyles } from '@material-ui/core/styles';
import styled from "styled-components";
import image from '../../assets/medium.jpg'

export const styles = makeStyles({
  container:{
    marginTop:"2rem",
    margin:"auto"
  },
  postContainer:{
    marginTop:"10rem"
  },
  categories:{
    marginTop:"5.6rem",
  },
  likeContainer:{
    display:"flex",
    flexDirection:"row",
  },
  typography:{
    paddingLeft:"1rem",
    color:"gray"
  }
})


export const HeaderImage = styled.img`
  width: 100%;
` 