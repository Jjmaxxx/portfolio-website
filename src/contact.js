import React from 'react';
import './App.css';
import styles from './utils/styles.js';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// let imageList = ["./images/testimage1.png","./images/testimage2.png","./images/testimage3.png","./images/testimage4.png","./images/testimage5.png"];
function Contact(props){
    const style = styles;
    return(
        <div style={{width:props.windowwidth,height:props.windowheight,display:"flex",justifyContent:"center"}}>
           <div style={style.contactContainer}>
                <div style={style.contact}>
                    <a href='mailto:justlee888@gmail.com'>
                        <IconButton style={style.contactIconButton}>
                            <EmailIcon style={style.contactIcon}/>
                        </IconButton>
                    </a>
                    <a href="https://github.com/Jjmaxxx">
                        <IconButton style={style.contactIconButton}>
                            <GitHubIcon style={style.contactIcon}/>
                        </IconButton>
                    </a>
                    <a href="https://www.linkedin.com/in/justin-lee-a670531ab/">
                        <IconButton style={style.contactIconButton}>
                            <LinkedInIcon style={style.contactIcon}/>
                        </IconButton>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Contact;