import React from 'react';
import './App.css';
import styles from './utils/styles.js';
function Home(props){
    const style = styles;
    return(
        <div className='Home' style={{width:props.windowwidth,height:props.windowheight}}>
            <div style={style.home}>
                <div style={{position:"absolute",width:(props.windowwidth/2),height:"200px",minHeight:'250px'}}>
                    <p style={style.homeHeading}>Hey, I'm Justin Lee.</p>
                    <p style={style.textColor}>I'm an undergraduate student from San Jose State University, and an aspiring Software Engineer.</p>
                </div>
            </div>
        </div>
    )
}
export default Home;