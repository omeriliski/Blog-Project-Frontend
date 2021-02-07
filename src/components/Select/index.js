import React,{useContext,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {Context} from '../../router/Router'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


export const SelectCategories=()=>{

  const handleChange = (event) => {
    consumer.categories.forEach(element => {
      console.log(element)
      if(element.name==event.target.value)
        consumer.setCategory(element.id)
    });
  };
  const consumer = useContext(Context);
  const classes = useStyles();
  useEffect(() => {
    consumer.getCategories();
  }, [])
  return(
    <FormControl className={classes.formControl}>
        <Select
          value={consumer.category}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
          >
          {consumer?.categories?.map((category)=>{
            return <MenuItem value={category.name}>{category.name}</MenuItem>
          })}
          
        </Select>
        <FormHelperText>Select Categorie</FormHelperText>
      </FormControl>  
  )
} 