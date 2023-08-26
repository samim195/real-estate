import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './Properties.css'

function SearchBox() {
    return (
        <div className="searchBox">
            <Box className='properties'
            sx={{
            width: 500,
            maxWidth: '100%',
            }}
        >
            <TextField fullWidth label="SEARCH PROPERTIES" id="fullWidth" />
        </Box>
        <Stack spacing={2} direction="row" className="buttonStack">
            <Button variant="contained">Buy</Button>
            <Button variant="contained">Rent</Button>
        </Stack>
      </div>
    )
}

export default SearchBox;