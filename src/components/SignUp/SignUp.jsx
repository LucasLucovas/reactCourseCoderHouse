import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, TextField, Button } from '@mui/material';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    const auth = getAuth();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error('Error while signing up:', error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4">Sign Up</Typography>
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
    </Container>
  );
};

export default Signup;
