import React from 'react';
import './App.css';
import Divider from '@mui/material/Divider';
function Projects(props){
    return(
        <div className='Home' style={{width:props.windowwidth,height:props.windowheight}}>
            <p style={{marginBottom:"0",color:"#00A8CC",fontFamily:"LeagueSpartan", fontWeight:"600",fontSize:"40px",textAlign:"center"}}>Projects</p>
            <div style={{marginTop:"15px",display:"flex",justifyContent:"center",padding:'0'}}>
                <Divider sx={{borderBottomWidth:"3px",backgroundColor:"#00A8CC",width:"200px"}} variant="middle"></Divider>
            </div>
        </div>
    )
}
export default Projects;