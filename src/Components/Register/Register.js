import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Paper, TextField, Button } from '@mui/material';
import {useNavigate} from 'react-router-dom';

export default function RegisterForm() {
    const navigate = useNavigate();

    const [successMessage, setSuccessMessage] = useState("");

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email: " + formData.email + " Password: " + formData.password);
        setTimeout(() => {
            setSuccessMessage("Successfully Registered! You can now login");
            navigate('/login');
        }, 1000);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        '& > :not(style)': {
          m: 1,
          width: '50%',
          height: '40%',
          position:'absolute',
          top:'200px'
        },
      }}
    >
 <Paper elevation={3} style={{ padding: '20px' }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
          Register
        </Button>
        {successMessage && <p style={{color: 'green'}}>{successMessage}</p>}
      </form>
    </Paper>
    </Box>
  );
}
