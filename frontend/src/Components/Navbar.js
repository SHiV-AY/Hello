import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const callLogin = ()=>{
    navigate('/login');
  }
  const callAbout = ()=>{
    navigate('/about');
  }
  const callcontact = ()=>{
    navigate('/contact');
  }
  const callHome = ()=>{
    navigate('/');
  }
  const callSignup = ()=>{
    navigate('/signup');
  }
  

  return (
    <div >
    <Box sx={{ 
      // flexGrow: 1,
      // backgroundImage:'url("https://cutewallpaper.org/29/download-wallpaper-engin/1801932754.jpg")',

      // backgroundSize:"cover"
      
      }} >
    <AppBar style={{ backgroundImage:'url("https://wallpapers.com/images/hd/popular-film-your-name-anime-vrf8kphnyzh4o0bk.jpg")',backgroundSize:"1500px",backgroundPositionX:"-15px",backgroundPositionY:"-15px"}} position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2
           }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MyProject
        </Typography>
        <Button color="inherit" onClick={callHome} >Home</Button>
        <Button color="inherit" onClick={callAbout}>About</Button>
        <Button color="inherit" onClick={callcontact}>Contact</Button>
        <Button color="inherit" onClick={callLogin}>Login</Button>
        <Button color="inherit" onClick={callSignup}>Signup</Button>

      </Toolbar>
    </AppBar>
  </Box>
  </div>
  )
}

export default Navbar