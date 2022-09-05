import React from 'react';
import './App.css';
import Divider from '@mui/material/Divider';
import ProjectSlider from './projectSlider.js';
let imageList = ["./images/project5.png","./images/project4.png","./images/project1.png","./images/project2.png","./images/project3.png"];
// let imageList = ["./images/testimage1.png","./images/testimage2.png","./images/testimage3.png","./images/testimage4.png","./images/testimage5.png"];
function Projects(props){
    return(
        <div className='Home' style={{height:props.windowheight}}>
            <div style={{height:'100%',display:"flex",flexDirection:"column",justifyContent:"center"}}>
                <p style={{marginBottom:"0",color:"#00A8CC",fontFamily:"Aileron",fontSize:"40px",textAlign:"center"}}>PROJECTS</p>
                <div style={{marginTop:"15px",marginBottom:"30px",display:"flex",justifyContent:"center",padding:'0'}}>
                    <Divider sx={{borderBottomWidth:"3px",backgroundColor:"#00A8CC",width:"200px"}} variant="middle"></Divider>
                </div>
                {/* <img src={require("./images/testimage1.png")}/> */}
                <ProjectSlider images={imageList} height={400} width={props.windowwidth}/>
                <p style={{color:"#00A8CC",textAlign:"center"}}>I also have many other smaller-scale projects hosted on <a style={{textDecoration:"none",color:"#004ead"}} href="https://github.com/Jjmaxxx">Github</a> and <a style={{textDecoration:"none",color:"#004ead"}} href="https://replit.com/@Jjmaxxx">Replit</a>.</p>
            </div>
        </div>
    )
}
export default Projects;