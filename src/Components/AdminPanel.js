import React from 'react'
import '../Styles/AdminPanel.css'
import {Typography , TextField , Button, Stack } from '@mui/material'
import logo from '../Images/Logo/mm-logo-no-text.png'
import { Box } from '@mui/system' 
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
        <Button variant='contained' color='primary'>SIGN IN</Button>
        </Stack>
      </Box>
    </Box>
    <Footer/>
    </>
  )
}
