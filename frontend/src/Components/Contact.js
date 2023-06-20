import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import loginServ from '../Services/loginServ'
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("submit clicked")
    const data = new FormData(event.currentTarget);
    const user = {
      email: data.get('email'),
      password: data.get('password'),
    }
    console.log(user);
    loginServ(user);
  };

  return (
    <div style={{display:"flex",justifyContent: "left"}}>
          <div style={{width:"30%",margin:"2%"}}>

      <ThemeProvider theme={defaultTheme}>
        <Container maxWidth={false}  component="main" >
          <Box

            sx={{


              marginTop: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: 6,
              opacity: 10,
              maxWidth: 'false',
              backgroundImage: 'url("https://wallpapers.com/images/hd/popular-film-your-name-anime-vrf8kphnyzh4o0bk.jpg")',
              backgroundPositionX:'-90px',
             backgroundPositionY:'-400px'
            }}

          >

            <h2>Phone</h2>
          </Box>

        </Container>
      </ThemeProvider>

      </div>
      <div style={{width:"30%",margin:"2%"}}>



      <ThemeProvider theme={defaultTheme}>
        <Container maxWidth={false} component="main" >
          <Box

            sx={{


              marginTop: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: 6,
              opacity: 10,
              maxWidth: 'false',
              backgroundImage: 'url("https://wallpapers.com/images/hd/popular-film-your-name-anime-vrf8kphnyzh4o0bk.jpg")',
             backgroundPositionX:'-90px',
             backgroundPositionY:'-400px'

            }}

          >

            <h2>Email</h2>
          </Box>

        </Container>
      </ThemeProvider>

      </div>
      <div style={{width:"30%",margin:"2%"}}>


      <ThemeProvider theme={defaultTheme}>
        <Container maxWidth={false} component="main" >
          <Box

            sx={{


              marginTop: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: 6,
              opacity: 10,
              maxWidth: 'false',
              backgroundImage: 'url("https://wallpapers.com/images/hd/popular-film-your-name-anime-vrf8kphnyzh4o0bk.jpg")',
              backgroundPositionX:'-90px',
             backgroundPositionY:'-400px'
            }}

          >

            <h2>Address</h2>
          </Box>

        </Container>
      </ThemeProvider>

      </div>
    </div>




  );
} export default Contact;


