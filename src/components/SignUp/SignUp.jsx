import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Typography, TextField, Button, Snackbar } from '@mui/material';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'; 


const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

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
    <Container maxWidth="sm">
      <Typography variant="h4">Sign Up</Typography>
      <TextField
        label="User Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <TextField
        label="Email Address"
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" color="primary" fullWidth onClick={handleSignup}>
        Sign Up
      </Button>
      <Typography variant="body2">
        Already have an account? <Link to="/login">Log In</Link>
      </Typography>
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
    </Container>
  );
};

export default Signup;

