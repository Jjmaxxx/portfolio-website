import React from 'react';
import './App.css';
function Home(props){
    return(
        <div className='Home' style={{width:props.windowwidth,height:props.windowheight}}>
            <div style={{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}>
                <div style={{position:"absolute",width:(props.windowwidth/2),height:"200px",minHeight:'250px'}}>
                    <p style={{color:"#00A8CC",fontFamily:"LeagueSpartan",fontSize:"70px",margin:0}}>Hey, I'm Justin Lee.</p>
                    <p style={{color:"#00A8CC"}}>I'm an undergraduate student from San Jose State University, and an aspiring Software Engineer.</p>
                </div>
            </div>
        </div>
    )
}
export default Home;