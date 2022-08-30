import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import Home from './home.js';
import Projects from './projects.js';
import About from './about.js';
import theme from './utils/theme.js';
import CirclesCanvas from './circlesGraphic.js';
import RotatingShapes from './rotatingShapes.js';
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { AppBar, Toolbar, Box } from "@mui/material";
function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }
  useEffect(() => {
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  return (
    <div className="App" style={{width:"100%",height: "400%",overflowX: "hidden"}}>
      <CirclesCanvas windowwidth={width} windowheight = {height} style={{position:'absolute', right:0, width:{width}, height:{height}}}/>
      <RotatingShapes windowwidth={width} windowheight = {height} style={{position:'absolute', right:0, width:{width}, height:{height}}}/>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <AppBar color="primary">
          <Toolbar sx={{display:"flex",justifyContent:"flex-end",gap:"50px"}}>
            <Box>
              <p style={{color:"#00A8CC"}}>Home</p>
            </Box>
            <Box>
              <p style={{color:"#00A8CC"}}>Projects</p>
            </Box>
            <Box>
              <p style={{color:"#00A8CC"}}>About Me</p>
            </Box>
            <Box>
              <p style={{color:"#00A8CC"}}>Contact Me</p>
            </Box>
          </Toolbar>
        </AppBar>

        <Home windowwidth={width} windowheight={height} />
        <Projects windowwidth={width}/>
        <About windowwidth={width} windowheight={height}/>
        {/* <p>width is {width}</p>
        <p>height is {height}</p> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
