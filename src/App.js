import './App.css';
import React from 'react';
import Home from './home.js';
import theme from './utils/theme.js';
import Canvas from './backgroundGraphics.js';
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { AppBar, Toolbar, Box } from "@mui/material";
function App() {
  return (
    <div className="App" style={{width:"100%",height:"100%"}}>
      <Canvas style={{position:'absolute', right:0}}/>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <AppBar sx={{background:"transparent", boxShadow: 'none'}}>
          <Toolbar sx={{display:"flex",justifyContent:"flex-end",gap:"50px"}}>
            <Box>
              <p style={{color:"#424874"}}>Home</p>
            </Box>
            <Box>
              <p style={{color:"#424874"}}>About Me</p>
            </Box>
            <Box>
              <p style={{color:"#424874"}}>Projects</p>
            </Box>
            <Box>
              <p style={{color:"#424874"}}>Contact Me</p>
            </Box>
          </Toolbar>
        </AppBar>
        <Home/>
      </ThemeProvider>
    </div>
  );
}

export default App;
