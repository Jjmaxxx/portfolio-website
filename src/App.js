import './App.css';
import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import Home from './home.js';
import Projects from './projects.js';
import About from './about.js';
import Experience from './experience.js';
import theme from './utils/theme.js';
import CirclesCanvas from './circlesGraphic.js';
import RotatingShapes from './rotatingShapes.js';
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { AppBar, Toolbar, Button } from "@mui/material";
import styles from './utils/styles.js';
let windowArea = window.innerHeight * window.innerWidth;
function App() {
  const style = styles;
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  let homePage = useRef(null);
  let projectsPage = useRef(null);
  let experiencePage = useRef(null);
  let aboutPage = useRef(null);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  function scroll(element){
    if(homePage.current && projectsPage.current && experiencePage.current && aboutPage.current){
      switch(element){
        case "home":
          homePage.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
          console.log('scroll to home');
          break;
        case "projects":
          projectsPage.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
          break;
        case "experience":
          experiencePage.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
          break;
        default:
          aboutPage.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }
  return (
    <div className="App" style={style.App}>
      <CirclesCanvas numberOfCircles = {Math.round(windowArea/28000)}windowwidth={width} windowheight = {height+100} style={{position:'absolute', right:0, width:{width}, height:{height}}}/>
      <RotatingShapes windowwidth={width} windowheight = {height+100} style={{position:'absolute', right:0, width:{width}, height:{height}}}/>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <AppBar color="primary">
          <Toolbar sx={style.toolBar}>
              <Button disableRipple onClick={()=>{scroll("home")}}>Home</Button>
              <Button disableRipple onClick={()=>{scroll("projects")}}>Projects</Button>
              <Button disableRipple onClick={()=>{scroll("experience")}} >Experience</Button>
              <Button disableRipple onClick={()=>{scroll("about")}} >About Me</Button>
          </Toolbar>
        </AppBar>

        <div ref={homePage}>
          <Home windowwidth={width} windowheight={height} />
        </div>
        <div ref={projectsPage} style={{marginTop:"50px"}}>
          <Projects windowwidth={width} windowheight={800}/>
        </div>
        <div ref={experiencePage}>
          <Experience windowwidth={width} windowheight={600}/>
        </div>
        <div ref={aboutPage}>
          <About windowwidth={width} windowheight={height}/>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
