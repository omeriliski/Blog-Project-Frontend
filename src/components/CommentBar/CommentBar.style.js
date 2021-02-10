import { makeStyles } from '@material-ui/core/styles';
import styled from "styled-components";


export const styles = makeStyles({
  likeContainer:{
    display:"flex",
    flexDirection:"row",
  },
  typography:{
    paddingLeft:"1rem",
    color:"gray",
    textTransform: "none"
  }
})


export const HeaderImage = styled.img`
  width: 100%;
` 