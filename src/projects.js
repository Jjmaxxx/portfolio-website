import React from 'react';
import './App.css';
import Divider from '@mui/material/Divider';
import ProjectSlider from './projectSlider.js';
let imageList = ["./images/project5.png","./images/project4.png","./images/project1.png","./images/project2.png","./images/project3.png"];
// let imageList = ["./images/testimage1.png","./images/testimage2.png","./images/testimage3.png","./images/testimage4.png","./images/testimage5.png"];
function Projects(props){
    return(
        <div className='Home' style={{width:props.windowwidth,height:props.windowheight}}>
            <p style={{marginBottom:"0",color:"#00A8CC",fontFamily:"LeagueSpartan", fontWeight:"600",fontSize:"40px",textAlign:"center"}}>Projects</p>
            <div style={{marginTop:"15px",marginBottom:"30px",display:"flex",justifyContent:"center",padding:'0'}}>
                <Divider sx={{borderBottomWidth:"3px",backgroundColor:"#00A8CC",width:"200px"}} variant="middle"></Divider>
            </div>
            {/* <img src={require("./images/testimage1.png")}/> */}
            <ProjectSlider images={imageList} height={400} width={props.windowwidth}/>
        </div>
    )
}
export default Projects;