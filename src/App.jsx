import React from 'react';
import { Sidebar } from './components/sidebar';
import { Feed } from './components/feed';
import { Rightbar } from './components/rightbar';
import { Navbar } from './components/navbar';
import { Box, Stack } from '@mui/material';

const App = () => {
  return (
    <Box>
      <Navbar />
      <Stack 
        direction="row" 
        spacing={2} 
        justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  )
}

export default App
