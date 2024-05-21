import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import LockOpenIcon from '@mui/icons-material/LockOpen'; 

const Navbar = ({ user, onLogout }) => {
  return (
    <Box sx={{ textDecoration: 'none', color: 'white' }}>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', padding: '5px' }}>
          <Typography variant='h5' component="h4" sx={{ fontWeight: 'bold' }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Code Master</Link>
          </Typography>
          <Typography variant='h5' component="h4" sx={{ marginLeft: '35px' }}>
            <Link to="/explore" style={{ textDecoration: 'none', color: 'inherit' }}>Explore</Link>
          </Typography>
          <Typography variant='h5' component="h4" sx={{ marginLeft: '35px' }}>
            <Link to="/problems" style={{ textDecoration: 'none', color: 'inherit' }}>Problems</Link>
          </Typography>
          <Typography variant='h5' component="h4" sx={{ marginLeft: '35px' }}>
            <Link to="/contest" style={{ textDecoration: 'none', color: 'inherit' }}>Contest</Link>
          </Typography>
          <Typography variant='h5' component="h4" sx={{ marginLeft: '35px' }}>
            <Link to="/leaderboard" style={{ textDecoration: 'none', color: 'inherit' }}>LeaderBoard</Link>
          </Typography>

          <Box sx={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
            {user ? (
              <>
                <Typography variant='h6' component="span" sx={{ marginRight: '15px' }}>
                  {user.fname}
                </Typography>
                <Button variant="contained" color="secondary" onClick={onLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button component={Link} to="/register" variant="contained" color="primary">
                  Register
                </Button>
                <Button component={Link} to="/login" variant="contained" color="secondary" startIcon={<LockOpenIcon />}>
                  Login
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
