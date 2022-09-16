import React from 'react';
import './App.css';
import styles from './utils/styles.js';
import Divider from '@mui/material/Divider';
import ProjectSlider from './projectSlider.js';
let imageList = ["./images/project5.png","./images/project4.png","./images/project1.png","./images/project2.png","./images/project3.png"];
// let imageList = ["./images/testimage1.png","./images/testimage2.png","./images/testimage3.png","./images/testimage4.png","./images/testimage5.png"];
function Projects(props){
    const style = styles;
    return(
        <div style={{height:props.windowheight}}>
            <div style={style.projects}>
                <p style={style.heading}>PROJECTS</p>
                <div style={style.dividerContainer}>
                    <Divider sx={style.divider} variant="middle"></Divider>
                </div>
                {/* <img src={require("./images/testimage1.png")}/> */}
                <p style={{color:"#00A8CC",fontSize:"10px",margin:"0"}}>click me ↓</p>
                <ProjectSlider images={imageList} height={400} width={props.windowwidth}/>
                <p style={style.centeredText}>I also have many other smaller-scale projects hosted on <a style={style.linkText} href="https://github.com/Jjmaxxx">Github</a> and <a style={style.linkText} href="https://replit.com/@Jjmaxxx">Replit</a>.</p>
            </div>
        </div>
    )
}
export default Projects;