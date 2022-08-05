import React from 'react';
import './App.css';
function Home(){
    return(
        <div className='Home' style={{width:"100%",height:"100%"}}>
            <div style={{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}>
                <div style={{position:"absolute",width:"500px",height:"500px"}}>
                    <p style={{color:"#424874",fontFamily:"LeagueSpartan", fontWeight:"bold",fontSize:"70px"}}>Hey, I'm Justin.</p>
                    <p style={{color:"#424874"}}>I'm an undergraduate student from San Jose State University, and an aspiring Software Engineer.</p>
                </div>
            </div>
        </div>
    )
}
export default Home;