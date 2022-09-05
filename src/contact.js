import React from 'react';
import './App.css';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// let imageList = ["./images/testimage1.png","./images/testimage2.png","./images/testimage3.png","./images/testimage4.png","./images/testimage5.png"];
function Contact(props){
    return(
        <div style={{width:props.windowwidth,height:props.windowheight,display:"flex",justifyContent:"center"}}>
           <div style={{width:"100%",display:"flex",alignItems:"center",backgroundColor:"#27496D",height:"100%",overflow:"hidden"}}>
                <div style={{display:"flex",justifyContent:'center',width:"100%",gap:"20px"}}>
                    <a href='mailto:justlee888@gmail.com'>
                        <IconButton style={{borderRadius:"50%", backgroundColor:"#00A8CC"}}>
                            <EmailIcon style={{color:"#142850",fontSize:"25px"}}/>
                        </IconButton>
                    </a>
                    <a href="https://github.com/Jjmaxxx">
                        <IconButton style={{borderRadius:"50%", backgroundColor:"#00A8CC"}}>
                            <GitHubIcon style={{color:"#142850",fontSize:"25px"}}/>
                        </IconButton>
                    </a>
                    <a href="https://www.linkedin.com/in/justin-lee-a670531ab/">
                        <IconButton style={{borderRadius:"50%", backgroundColor:"#00A8CC"}}>
                            <LinkedInIcon style={{color:"#142850",fontSize:"25px"}}/>
                        </IconButton>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Contact;