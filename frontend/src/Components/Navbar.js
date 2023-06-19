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
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
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
  )
}

export default Navbar