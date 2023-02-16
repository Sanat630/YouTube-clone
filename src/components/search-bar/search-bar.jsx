import React from 'react'
import { useState } from 'react';
import { Paper, IconButton } from "@mui/material"
import { colors } from "../../constants/colors";
import { Search } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [value, setValue] = useState('')
  const navigate = useNavigate()

  const changeHandler = e => {
    e.preventDefault()
    console.log(value);        
    if(value){
      navigate(`/search/${value}`)
    }                                                                                          
  }

  return (
    <Paper
      onSubmit={changeHandler}
      component={"form"}
      sx={{ border: `2px solid ${colors.secondary}`, pl: 2, boxShadow: "none", borderRadius: "none", mr: 5, }}>
      <input type="text" placeholder='Search...' className='search-bar' value={value} onChange={e => setValue(e.target.value)} />  
      <IconButton type='submit'>
        <Search />
      </IconButton>
    </Paper>
  )
}

export default SearchBar;