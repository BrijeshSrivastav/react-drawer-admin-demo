import React from 'react'
import Box from '@mui/material/Box';
import UserDetail from './components/UserDetail';
import { Stack } from '@mui/material';
const Dashboard = () => {
  return (
    <Box  sx={{ mt:10,ml:4}}>
     <Stack sx={{pl:10,pr:10}}>
     <UserDetail />
     </Stack>
    </Box>
  )
}


export default Dashboard