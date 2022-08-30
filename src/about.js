import React from 'react';
import './App.css';
import Divider from '@mui/material/Divider';
import SpinningCircles from './spinningCircles.js';
// let imageList = ["./images/testimage1.png","./images/testimage2.png","./images/testimage3.png","./images/testimage4.png","./images/testimage5.png"];
function About(props){
    return(
        <div className='Home' style={{width:props.windowwidth,height:props.windowheight}}>
            <div style={{display:"flex",justifyContent:"space-around"}}>
            {/* style={{width:"100%"}} */}
                <div>
                    <p style={{marginBottom:"0",color:"#00A8CC",fontFamily:"LeagueSpartan", fontWeight:"600",fontSize:"40px"}}>Languages</p>
                    <div style={{marginTop:"15px",marginBottom:"30px",display:"flex",justifyContent:"center",padding:'0'}}>
                        <Divider sx={{borderBottomWidth:"3px",backgroundColor:"#00A8CC",width:"200px"}} variant="middle"></Divider>
                    </div>
                    <div style={{marginLeft:"50px"}}>
                        <ul style={{display:"flex",flexDirection:"column",gap:"0px 30px",textAlign:"left",listStylePosition: 'inside',color:"#00A8CC",width:"100%",padding:"0",margin:"0"}}>
                            <li style={{fontWeight:"bold"}}>HTML/CSS/JS</li>
                            <ul>
                                <li>Used for about 4 years. Very Proficient</li>
                                <li>Made many personal projects and by using Node.js,<br/>I am familiar with back-end and front-end web development.</li>
                            </ul>
                            <li style={{fontWeight:"bold"}}>Python</li>
                            <ul>
                                <li>Used for around 2 years. Proficient</li>
                                <li>Used to make many smaller-scale projects and algorithms.</li>
                            </ul>
                            <li style={{fontWeight:"bold"}}>Unity/C#</li>
                            <ul>
                                <li>Used for around 1 year. Proficient</li>
                                <li>Mostly worked to recreate many 2D games with Unity.</li>
                            </ul>
                            <li style={{fontWeight:"bold"}}>Java</li>
                            <ul>
                                <li>Used for about a year. Relatively Proficient</li>
                                <li>Can use it, but have not made many personal projects with it.</li>
                            </ul>
                        </ul>
                    </div>
                </div>
                {/* <div style={{width:"100%"}}>
                    <SpinningCircles style={{width:"100%",height:"100%"}}/>
                </div> */}
                {/* style={{width:"100%"}} */}
                <div >
                    <p style={{marginBottom:"0",color:"#00A8CC",fontFamily:"LeagueSpartan", fontWeight:"600",fontSize:"40px"}}>Work Experience</p>
                    <div style={{marginTop:"15px",marginBottom:"30px",display:"flex",justifyContent:"center",padding:'0'}}>
                        <Divider sx={{borderBottomWidth:"3px",backgroundColor:"#00A8CC",width:"300px"}} variant="middle"></Divider>
                    </div>
                    <ul style={{color:"#00A8CC",listStylePosition: 'inside',textAlign:"left"}}>
                        <li style={{fontWeight:"bold"}}>Code Coach at The Coder School SF</li>
                        <ul>
                            <li>Been working here for over a year</li>
                            <li>I work to teach kids from anywhere between 7-14 on <br/> the basics of coding.</li>
                            <li>Primarily use Scratch and Python to teach coding <br/>concepts such as variables, functions, arrays, classes, and more.</li>
                            <li>The lessons are usually one hour a week per student, <br/> with myself teaching concepts to the student through projects.</li>
                        </ul>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default About;