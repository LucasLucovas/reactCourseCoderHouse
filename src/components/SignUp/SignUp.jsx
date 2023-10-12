//React imports
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

//Firebase imports
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'; 

//Mui imports
import { Typography, TextField, Button, Snackbar, Grid, Modal } from '@mui/material';
import { brown, teal, cyan } from '@mui/material/colors';

const color = {
  brown: brown['50'],
  teal: teal['100'],
  cyan: cyan['100'],
};


const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigateTo = useNavigate();

  const handleSignup = async () => {
    const auth = getAuth();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      await updateProfile(user, {
        displayName: userName,
      });
  
      setShowSuccessMessage(true);
      navigateTo('/')
    } catch (error) {
      console.error('Error while signing up:', error);
    }
  };

  const handleCloseSuccessMessage = () => {
    setShowSuccessMessage(false);
    navigateTo('/login'); 
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
        SignUp
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
          width={374} height={372} 
          bgcolor={color.brown}
          borderRadius={1}
        >

        <Grid item minWidth={350}>
          <Typography variant="h4">Sign Up</Typography>
        </Grid>
        <Grid item>
          <TextField
            label="User Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={userName}
            sx={{
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: 'black',
                  },
                  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: color.cyan, 
                  },
              }}
            onChange={(e) => setUserName(e.target.value)}
          />
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
            color="primary" 
            fullWidth onClick={handleSignup}
            sx={{
                    backgroundColor: color.teal, 
                    color: 'black',
                    '&:hover':{
                      backgroundColor: color.cyan
                    }
                  }}  
            >
            Sign Up
          </Button>
        </Grid>
        <Grid item>
          <Typography variant="body2">
            Already have an account? <Link to="/login">Log In</Link>
          </Typography>
        </Grid>
        <Grid item>
          <Snackbar
            open={showSuccessMessage}
            autoHideDuration={6000} 
            onClose={handleCloseSuccessMessage}
            message="Registration Successful" 
            action={
              <Button color="primary" size="small" onClick={handleCloseSuccessMessage}>
                Go to Login
              </Button>
            }
          />
        </Grid>
      </Grid>
      </Modal>
    </>
  );
};

export default Signup;

