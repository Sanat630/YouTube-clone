import React from 'react'
import { Stack, Box} from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../../constants";
import { SearchBar } from "../"; 


const Navbar = () => {
  return (
    <Stack
      direction={'row'}
      alignItems={'center'} 
      justifyContent={'space-around'} 
      p={2} 
      sx={
        {position: 'sticky', top: 0, zIndex: 999, 
        background: "#ffc32f2b",
        borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)",
        border: "1px solid rgba(255, 255, 255, 0.3)"}}
      >      
      <Link to={"/"} >
      <img src={logo} alt='' height={60}/>
      </Link>
      <SearchBar/>
      <Box/>
    </Stack>
  )
}

export default Navbar;