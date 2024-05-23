import React, { useState } from 'react';
import { Box, TextField, Paper, Avatar, Typography, Button, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [value, setValue] = useState({
    fname: "",
    sname: "",
    number: "",
    password: ""
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    const { fname, sname, number, password } = value;

    if (!fname || !sname || !number || !password) {
      setError("Please enter all the details");
    } else {
      alert("Successfully Registered");
      navigate('/login');
    }
  }

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
        }}
      >
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Typography variant='h5' component="h4">Register</Typography> 
          <Avatar src="/broken-image.jpg" />
        </Box>
        {error && <Alert severity="error">{error}</Alert>}
        <TextField
          required
          type='text'
          label="First Name"
          value={value.fname}
          onChange={e => setValue({...value, fname: e.target.value})}
        />
        <TextField
          required
          type='text'
          label="Second Name"
          value={value.sname}
          onChange={e => setValue({...value, sname: e.target.value})}
        />
        <TextField
          required
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          value={value.number}
          onChange={e => setValue({...value, number: e.target.value})}
        />
        <TextField
          required
          label="Password"
          type="password"
          autoComplete="current-password"
          value={value.password}
          onChange={e => setValue({...value, password: e.target.value})}
        />
        <Button variant='contained' onClick={handleSubmit}>Register</Button>
      </Paper>
    </Box>
  );
};

export default Register;
