import React from 'react';
import './App.css';
import { useState, useEffect} from 'react';
import { Dialog, DialogTitle } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Divider from '@mui/material/Divider';
function ProjectDialog(props){
    const [open, setOpen] = useState(true);
    const [projectName,setProjectName] = useState("");
    const [projectImages,setProjectImages] = useState([]);
    const [madeWithText, setMadeWithText] = useState("");
    const [projectText, setProjectText] = useState("");
    const [projectLink, setProjectLink] = useState("");
    const [index,setIndex] = useState(0);
    const [xMove, setXMove] = useState(0);
    useEffect(() => {
      switch(props.num){
        case 0:
          setProjectImages(["./images/project1.png","./images/project1 2.png","./images/project1 3.png","./images/project1 4.png","./images/project1 5.png"]);  
          setProjectName("Youtube Downloader & Player");
          setMadeWithText("Node.js. Uses Electron.js and React.js");
          setProjectText("Allows for downloading of videos from Youtube in either MP3 or MP4 format onto the users device. \n Once downloaded, users can play the video in the application by navigating to the 'Playlists' tab. This application allows new playlists to be made, movement between playlists, renaming, and deletion of files.");
          setProjectLink("https://github.com/Jjmaxxx/electron-with-react-ytdl");
          break;
        case 1:
          setProjectImages(["./images/project2.png","./images/project2 2.png","./images/project2 3.png","./images/project2 4.png","./images/project2 5.png"]);
          setProjectName("Discord Insulter Bot");
          setMadeWithText("Node.js. Uses MongoDB and Discord.js");
          setProjectText("Users can set the bot to automatically insult any other user that types in the chat. \n This bot allows for adding of insults and different sets of insults depending on the server the bot is in. Also allows for discrete targetting of other users through direct messages.");
          setProjectLink("https://github.com/Jjmaxxx/arcane-bot");
          break;
        case 2:
          setProjectImages(["./images/project3.png","./images/project3 2.png","./images/project3 3.png","./images/project3 4.png"]);
          setProjectName("Let's Dueldo!");
          setProjectText("This game pits 2 players from all clients connected to the server against each other to see who can draw the best picture from the prompt. The winner is determined by the other clients connected that are not playing.");
          setMadeWithText("Node.js. Uses Socket.IO, and p5.js");
          setProjectLink("https://github.com/Jjmaxxx/Lets-Dueldo");
          break;
        case 3:
          setProjectImages(["./images/project5.png","./images/project5 2.png","./images/project5 3.png","./images/project5 4.png"]);
          setProjectName("Bitcoin Clicker");
          setProjectText("This game is cookie clicker but instead of going on infinitely, you need to get out of $1,000,000 debt! Buy a plethora of items and people to support you on your journey of Bitcoin domination and win!");
          setMadeWithText("HTML, CSS, JS. Uses p5.js");
          setProjectLink("https://github.com/Jjmaxxx/bitcoin-clicker");
          break;
        case 4:
          setProjectImages(["./images/project4.png","./images/project4 2.png","./images/project4 3.png","./images/project4 4.png","./images/project4 5.png"]);
          setProjectName("Audio Recorder Website");
          setProjectText("This website allows the user to record audio from their microphone and download the file. Has a built in player that plays the audio back to the user so they can determine if it's good or not.");
          setMadeWithText("Node.js. Uses p5.js");
          setProjectLink("https://github.com/Jjmaxxx/audio-recording");
          break;
        default:
          setProjectName("null");
          break;
      }
    }, [open]);
    function goBack(){
      setXMove(xMove-590);
      setIndex(index-1);
    }
    function goForward(){
      setXMove(xMove+590);
      setIndex(index+1);
    }
    const handleClose = (value) => {
      setOpen(false);
      props.setParentNum('false');
    };
    return(
      <div>
        <Dialog
            open={open}
            onClose={handleClose}
        >
          <DialogTitle style={{fontSize:"25px",textAlign:"center",fontWeight:"bolder",textDecoration: "underline",textDecorationWidth:"3px"}} color="secondary">{projectName}</DialogTitle>
          <div style={{display:'flex',overflow:"hidden"}}>
            <div 
              style={{width:"100%",height:"350px", whiteSpace:"nowrap",transform: `translateX(${xMove * -1}px)`,transitionDuration:"1s"}}
            >
              {projectImages.map((src,num)=>{
                return(<img src={require(`${ src}`)} width={"100%"} height={"100%"} key={src} alt={src}></img>) 
              })}
            </div>
            <div style={{marginLeft:"-100%",top:"219px",display:"flex",justifyContent:"space-between",width:"100%"}}>
              {index!==0 &&
                <IconButton disableRipple onClick = {goBack}>
                  <ArrowBackIosIcon color="primary"/>
                </IconButton>
              }
              {index === 0 ?
                <div style={{display:"flex",justifyContent:"flex-end",width:"100%"}}>
                  <IconButton disableRipple onClick = {goForward}>
                    <ArrowForwardIosIcon color="primary"/>
                  </IconButton>
                </div>
              :
                index!==projectImages.length-1 ? 
                  <IconButton disableRipple onClick = {goForward}>
                    <ArrowForwardIosIcon color="primary"/>
                  </IconButton>
              : <div>
                </div>
              }
            </div>
          </div>
          <p style={{color:"#00A8CC",fontStyle:"italic",fontWeight:"bold",marginLeft:"10px"}}>
            Made With: {madeWithText}
          </p>
          <div style={{width:"100%",display:"flex",justifyContent:"center",padding:"0",margin:"0"}}>
            <p style={{color:"#00A8CC", width:"75%", whiteSpace: "pre-line",textAlign:"center",padding:"0",margin:"0"}}>{projectText}</p>
          </div>
          <div style={{display:"flex",justifyContent:"center",margin:"10px"}}>
            <a href={projectLink}>
              <img src={require("./images/github.png")} alt="" width="50px" height="50px"/>
            </a>
          </div>
        </Dialog>
      </div>
    )
}
export default ProjectDialog;