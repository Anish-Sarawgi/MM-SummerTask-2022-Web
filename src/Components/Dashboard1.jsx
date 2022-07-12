import { Box, Stack } from '@mui/material'
import React from 'react'
import Sidebar from './Dashboard/Sidebar'
import Midbar from './Dashboard/Midbar'
import Rightbar from './Dashboard/Rightbar'

export default function Dashboard1() {
  return (
    <Box>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar/>
        <Midbar/>
        <Rightbar/>
      </Stack>
    </Box>
  )
}
