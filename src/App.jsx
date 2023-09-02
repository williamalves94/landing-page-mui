import { React, useState } from 'react';
import { Sidebar } from './components/sidebar';
import { Feed } from './components/feed';
import { Rightbar } from './components/rightbar';
import { Navbar } from './components/navbar';
import { Box, Stack, createTheme, ThemeProvider } from '@mui/material';
import { Add } from './components/add';

const App = () => {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme ({
    palette: {
      mode: mode,
    }
  })

  return (
    <ThemeProvider theme={ darkTheme }>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar setMode={setMode} mode={mode} />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar setMode={setMode} mode={mode} />
        <Feed />
        <Rightbar/>
      </Stack>
      <Add />
    </Box>
    </ThemeProvider>
  )
}

export default App;
