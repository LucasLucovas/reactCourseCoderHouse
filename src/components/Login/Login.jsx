//React imports
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

//Mui imports
import {  Typography, TextField, Button, Snackbar, Grid, Modal } from '@mui/material';
import { brown, teal, cyan } from '@mui/material/colors';

//Firebase imports
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';


const color = {
  brown: brown['50'],
  teal: teal['100'],
  cyan: cyan['100'],
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const navigate = useNavigate('')
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleLogin = async () => {
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, email, password);

      setShowSuccessMessage(true);

      navigate('/')
    } catch (error) {
      console.error('Error while logging in:', error);
    }
  };

  const handleCloseSuccessMessage = () => {
    setShowSuccessMessage(false);
  };

  

  return (
    <>
      <Button
       onClick={handleOpen}
       sx={{ 
              color: 'common.black', 
              textDecoration: 'none',
              borderRadius: 0,
              '&:focus': {
                borderBottom: '1px solid black',
                },
                fontSize: 12,
              }}
       >
        Login
       </Button>
        <Modal
          open={open}
          onClose={handleClose}
          sx={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
          }}
        >
          <Grid 
            container 
            flexDirection={'column'} 
            justifyContent={"center"} 
            alignContent={"center"} 
            width={374} height={334} 
            bgcolor={color.brown}
            borderRadius={1}
            >

                <Grid item minWidth={350}>
                    <Typography variant="h4" >Log In</Typography>
                </Grid>

                  <Grid item>
                    <TextField
                      label="Email Address"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      value={email}
                      sx={{
                        '& .MuiInputLabel-root.Mui-focused': {
                          color: 'black',
                        },
                        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: color.cyan, 
                        },
                      }}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      label="Password"
                      variant="outlined"
                      type="password"
                      fullWidth
                      margin="normal"
                      value={password}
                      sx={{
                        '& .MuiInputLabel-root.Mui-focused': {
                          color: 'black',
                        },
                        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: color.cyan, 
                        },
                      }}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Grid>
                  <Grid item>
                    <Button 
                      variant="contained" 
                      sx={{
                          backgroundColor: color.teal, 
                          color: 'black',
                          '&:hover':{
                            backgroundColor: color.cyan
                          }
                        }}  
                      fullWidth 
                      onClick={handleLogin}>
                      Log In
                    </Button>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2">
                      Don't have an account? <Link to="/signup">Sign Up</Link>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Snackbar
                      open={showSuccessMessage}
                      autoHideDuration={6000}
                      onClose={handleCloseSuccessMessage}
                      message="Login Successful"
                    />
                  </Grid>
              </Grid>
      </Modal>
    </>
  );
};

export default Login;





