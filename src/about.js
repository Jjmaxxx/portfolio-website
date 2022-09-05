import React from 'react';
import './App.css';
import Contact from './contact.js';
import Divider from '@mui/material/Divider';
// let imageList = ["./images/testimage1.png","./images/testimage2.png","./images/testimage3.png","./images/testimage4.png","./images/testimage5.png"];
function About(props){
    return(
        <div className='Home' style={{width:props.windowwidth,display:'flex',flexDirection:"column",alignItems:"center",gap:"100px"}}>
            <div style={{width:props.windowwidth/2}}>
                <p style={{marginBottom:"0",color:"#00A8CC",fontFamily:"Aileron",fontSize:"40px"}}>ABOUT</p>
                <div style={{marginTop:"15px",marginBottom:"30px",display:"flex",justifyContent:"center",padding:'0'}}>
                    <Divider sx={{borderBottomWidth:"3px",backgroundColor:"#00A8CC",width:"200px"}} variant="middle"></Divider>
                </div>
                <img style={{width:"200px",height:"200px",border:"3px #00A8CC solid",borderRadius: "50%"}} alt="me" src={require("./images/picture of myself.png")}/>
                <p style={{color:"#00A8CC",display:'flex',flexDirection:"column",gap:"10px",fontSize:"18px"}}>
                    <p style={{fontSize:"22px"}}><strong><i>Hey! I'm Justin. I'm an undergraduate student from San Jose State University, and an asp-</i></strong> <br/>but you get the gist of it, I won't do this again, haha.</p>
                    <br/>
                    As an Asian American who intends to go into the Computer Science field, I admit I have a bit of a hard time standing out. 
                    However, I have more qualities than just that! I love creating projects that others can use and enjoy. 
                    I am experienced in full-stack web development, by making interactable websites that visually excites 
                    and provide a purpose to others. Of course, I am still young and like to experiment with other coding languages 
                    and types of softwares I can make. From game development with Unity, discord bots, and making downloadable applications,
                    I've experimented with a lot of different technologies! Over the around 5 years I've been coding, I have learned and created a lot, but
                    I still have much to learn. I will continue to barrel forward into the great and vast space that is coding,
                    because I have just barely begun to scratch the surface of what I can do. 
                </p>
            </div>
            <Contact windowwidth={props.windowwidth} windowheight={100}/>
        </div>
    )
}
export default About;