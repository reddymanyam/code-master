// src/components/Profile.js
import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const Profile = ({ user }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        pt: "40px",
        backgroundImage: "url('https://img.freepik.com/free-vector/gradient-network-connection-background_23-2148881320.jpg?size=626&ext=jpg')",
        width: "100%",
        height: "81vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 2,
          width: "400px",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          textAlign: 'center'
        }}
      >
        <Typography variant='h5'>Profile</Typography>
        <Typography>First Name: {user.fname}</Typography>
        <Typography>Second Name: {user.sname}</Typography>
      </Paper>
    </Box>
  );
};

export default Profile;
