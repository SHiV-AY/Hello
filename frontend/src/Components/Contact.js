import * as React from 'react';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import ForwardToInboxOutlinedIcon from '@mui/icons-material/ForwardToInboxOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Link from '@mui/material/Link';
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
    <div>

      <div style={{ display: "flex", justifyContent: "left" }}>
        <div style={{ width: "20%", marginLeft: "10%" }}>

          <ThemeProvider theme={defaultTheme}>
            <Container maxWidth={false} component="main" style={{ width: "100%" }} >

              <Box

                sx={{


                  marginTop: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  boxShadow: 6,
                  maxWidth: 'false',
                  backgroundImage: 'url("https://wallpapers.com/images/hd/popular-film-your-name-anime-vrf8kphnyzh4o0bk.jpg")',
                  backgroundPositionX: '-90px',
                  backgroundPositionY: '-400px'
                }}

              >
                <div style={{ display: "flex", justifyContent: "left", marginLeft: "40px" }}>
                  <ForwardToInboxOutlinedIcon fontSize='small' style={{ marginTop: "5px", marginRight: '5px' }} />

                  <div style={{ width: "30%", marginRight: "50px" }}>
                    <Typography variant="h6" style={{ fontSize: "12px" }}>
                      <span style={{marginLeft:"15px"}}>Phone</span><br />+9158574810

                    </Typography>
                  </div>
                </div>
              </Box>

            </Container>
          </ThemeProvider>

        </div>
        <div style={{ width: "20%", marginLeft: "10%" }}>

          <ThemeProvider theme={defaultTheme}>
            <Container maxWidth={false} component="main" style={{ width: "100%" }} >

              <Box

                sx={{


                  marginTop: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  boxShadow: 6,
                  maxWidth: 'false',
                  backgroundImage: 'url("https://wallpapers.com/images/hd/popular-film-your-name-anime-vrf8kphnyzh4o0bk.jpg")',
                  backgroundPositionX: '-90px',
                  backgroundPositionY: '-400px'
                }}

              >
                <div style={{ display: "flex", justifyContent: "left", marginLeft: "40px" }}>
                  <ForwardToInboxOutlinedIcon fontSize='small' style={{ marginTop: "5px", marginRight: '5px' }} />

                  <div style={{ width: "30%", marginRight: "50px" }}>
                    <Typography variant="h6" style={{ fontSize: "12px" }}>
                    <span style={{marginLeft:"60px"}}>Email</span><br />Shubhamwadhave7@gmail.com

                    </Typography>
                  </div>
                </div>
              </Box>

            </Container>
          </ThemeProvider>

        </div>
        <div style={{ width: "20%", marginLeft: "10%" }}>

          <ThemeProvider theme={defaultTheme}>
            <Container maxWidth={false} component="main" style={{ width: "100%" }} >

              <Box

                sx={{


                  marginTop: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  boxShadow: 6,
                  maxWidth: 'false',
                  backgroundImage: 'url("https://wallpapers.com/images/hd/popular-film-your-name-anime-vrf8kphnyzh4o0bk.jpg")',
                  backgroundPositionX: '-90px',
                  backgroundPositionY: '-400px'
                }}

              >
                <div style={{ display: "flex", justifyContent: "left", marginLeft: "40px" }}>
                  <HomeOutlinedIcon fontSize='small' style={{ marginTop: "5px", marginRight: '10px' }} />

                  <div style={{ width: "60%", marginRight: "50px" }}>
                    <Typography variant="h6" style={{ fontSize: "12px" }}>
                    <span style={{marginLeft:"15px"}}>Address</span><br />Andheri Mumbai

                    </Typography>
                  </div>
                </div>
              </Box>

            </Container>
          </ThemeProvider>

        </div>


      </div>
      <div style={{ border: 'solid' }}>
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
                backgroundPositionX: '-90px',
                backgroundPositionY: '-400px'
              }}

            >


            </Box>

          </Container>
        </ThemeProvider>
      </div>
    </div>




  );
} export default Contact;


