import { makeStyles } from '@material-ui/core/styles';
import styled from "styled-components";
import image from '../../assets/medium.jpg'

export const styles = makeStyles({
  container:{
    backgroundImage:`url(${image})`,
    height:"24.5rem",
    borderBottom:"1px solid black",
    marginTop:"4rem"
  },
  containerLeft:{
    position:"relative",
    height:"100%"
  },
  text:{
    position: "absolute",
    top: "60%",
    left: "9%",
    fontSize:"18px",
    textAlign:"left"
  },
  link:{
    fontSize:"18px",
  },
  getStarted:{
    position: "absolute",
    top: "80%",
    left: "9%",
    textTransform: "none"
  }
})


export const HeaderImage = styled.img`
  width: 100%;
` 
