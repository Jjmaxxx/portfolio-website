import React from 'react';
import './App.css';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
let imageList = ["./images/project5.png","./images/project4.png","./images/project1.png","./images/project2.png","./images/project3.png"];
// let imageList = ["./images/testimage1.png","./images/testimage2.png","./images/testimage3.png","./images/testimage4.png","./images/testimage5.png"];
function Contact(props){
    return(
        <div className='Home' style={{width:props.windowwidth,height:props.windowheight,display:"flex",justifyContent:"center"}}>
           <div style={{width:"100%",display:"flex",alignItems:"center",backgroundColor:"#27496D",borderTopLeftRadius:props.windowheight,borderTopRightRadius:props.windowheight,height:"100%",overflow:"hidden"}}>
                <div style={{display:"flex",justifyContent:'center',width:"100%",gap:"10px"}}>
                    <IconButton style={{borderRadius:"50%", backgroundColor:"#00A8CC"}}>
                        <EmailIcon style={{color:"#142850",fontSize:"25px"}}/>
                    </IconButton>
                    <IconButton style={{borderRadius:"50%", backgroundColor:"#00A8CC"}}>
                        <GitHubIcon style={{color:"#142850",fontSize:"25px"}}/>
                    </IconButton>
                    <IconButton style={{borderRadius:"50%", backgroundColor:"#00A8CC"}}>
                        <LinkedInIcon style={{color:"#142850",fontSize:"25px"}}/>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}
export default Contact;