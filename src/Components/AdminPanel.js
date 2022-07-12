import React from 'react'
import '../Styles/AdminPanel.css'
import {Box, Typography , TextField , Button, Stack } from '@mui/material'
import { Link } from "react-router-dom";

import logo from '../Images/Logo/mm-logo-no-text.png' 
import Footer from './Footer'

export default function AdminPanel() {
  return (
    <>
    <Box className='admin-panel'>
      <Typography variant='h3'>This is Admin Panel</Typography>
      <Box component='form' className='form' 
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      >
        <Typography variant='h5'>Welcome to Monday Morning</Typography>
        <img src={logo} alt="logo" id="admin-panel-mm-logo"/>
        <Stack>
        <TextField label="Username" />
        <TextField label="Password" type='password' />
        <Button variant='contained' color='primary'><Link to='/dashboard'>SIGN IN</Link></Button>
        </Stack>
      </Box>
    </Box>
    <Footer/>
    </>
  )
}
