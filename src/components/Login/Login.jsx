import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, TextField, Button } from '@mui/material';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error('Error while logging in:', error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4">Log In</Typography>
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
      <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
        Log In
      </Button>
      <Typography variant="body2">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </Typography>
    </Container>
  );
};

export default Login;
