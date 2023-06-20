import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import signServ from '../Services/signServ'
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

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user = {
      name: data.get('name'),

      email: data.get('email'),
      phone: data.get('phone'),
      work:data.get('work'),
      password: data.get('password'),
      cpassword:data.get('cpassword')
    }
    signServ(user)
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="md">
        {/* <CssBaseline /> */}
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: 6
          }}
        
        ><br></br>
          <Avatar sx={{ m: 0, bgcolor: 'secondary.main' }}/>
            
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, mb:10}}>
          <TextField
              margin="normal"
              required
              style={{marginRight:"4%",marginLeft:"4%"}}
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
            />
            <TextField
              margin="normal"
              required
              style={{marginRight:"3%"}}
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
            <TextField
              margin="normal"
              required
              id="phone"
              label="Phone Number"
              name="phone"
              autoComplete="phone"
            />
            <TextField
              margin="normal"
              required
              style={{marginRight:"4%",marginLeft:"4%"}}
              
              id="work"
              label="Work At"
              name="work"
              autoComplete="work"
            />
            <TextField
              margin="normal"
              required
              style={{marginRight:"3%"}}

              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
             <TextField
              margin="normal"
              required
              

              name="cpassword"
              label="Confirm Password"
              type="cpassword"
              id="cpassword"
              autoComplete="current-password"
            />
            <FormControlLabel
            style={{marginLeft:"40%"}}
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              style={{marginLeft:"45%"}}
              variant="contained"
             
            >
              Sign In
            </Button>
            
          </Box>
         
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}