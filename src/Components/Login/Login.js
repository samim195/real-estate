import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Paper, TextField, Button } from '@mui/material';
import {useNavigate, useLocation} from 'react-router-dom';

export default function Login() {
    const naviate = useNavigate();

    const [successMessage, setSuccessMessage] = useState("");

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email: " + formData.email + " Password: " + formData.password);
        // if (formData.email == "sk@hotmail.com" && formData.password == "password") {
            setTimeout(() => {
                setSuccessMessage("Successfully logged in!");
                naviate('/myproperties', { state: { email: formData.email}});
            }, 1000);
        // } else {
        //     setSuccessMessage("Incorrect email or password, please try again with the correct information.")
        // }

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
          height: '25%',
          position:'absolute',
          top:'200px'
        },
      }}
    >
 <Paper elevation={3} style={{ padding: '20px' }}>
      <form onSubmit={handleSubmit}>
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
          Login
        </Button>
        {successMessage && <p style={{color: 'green'}}>{successMessage}</p>}
      </form>
    </Paper>
    </Box>
  );
}
