import { Button } from '@mui/material';
import { getAuth, signOut } from 'firebase/auth';

const LogoutButton = () => {
  const auth = getAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);


    } catch (error) {
      console.error('Error while logging out:', error);
    }
  };

  return (
    <Button variant="contained" color="secondary" onClick={handleLogout}>
      Log Out
    </Button>
  );
};

export default LogoutButton;
