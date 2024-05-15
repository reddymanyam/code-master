import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  

  return (
    
      <Box sx={{textDecoration:'none', color:'white'}} >
        <AppBar position="static">
      <Toolbar sx={{ display: "flex", padding: "5px" }}>
        <Typography variant='h5' component="h4" sx={{ fontWeight: "bold" }}>
         Code Master 
        </Typography>
        <Typography variant='h5' component="h4" sx={{  marginLeft: "35px" }}>
         <Link to="/explore"  style={{ textDecoration: 'none', color: 'inherit' }}> Explore </Link>
        </Typography>
        <Typography variant='h5' component="h4" sx={{  marginLeft: "35px" }}>
          <Link to="/problems"  style={{ textDecoration: 'none', color: 'inherit' }}>Problems</Link>
        </Typography>
        <Typography variant='h5' component="h4" sx={{  marginLeft: "35px" }}>
        <Link to="/contest"  style={{ textDecoration: 'none', color: 'inherit' }}>Contest</Link>  
        </Typography>
        <Typography variant='h5' component="h4" sx={{  marginLeft: "35px" }}>
        <Link to="/leaderboard"  style={{ textDecoration: 'none', color: 'inherit' }}>LeaderBoard</Link> 
        </Typography>
        
        <Button component={Link} to="/register" variant="contained" color="primary" sx={{ ml: 45 }}>
                Register
            </Button>
            <Button component={Link} to="/login" variant="contained" color="secondary" sx={{ ml: 2 }}>
                Login
            </Button>
      
      </Toolbar>
      
    </AppBar>
    </Box>
   
  );
}
export default Navbar;