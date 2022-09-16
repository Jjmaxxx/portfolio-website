import React from 'react';
import './App.css';
import Divider from '@mui/material/Divider';
import styles from './utils/styles.js';
function Experience(props){
    const style = styles;
    return(
        <div style={{width:props.windowwidth,display:'flex',alignItems:"center",gap:"100px",marginBottom:"30px",justifyContent:"space-around"}}>
            <div style={style.experiencePage}>
            
                <div>
                <p style={style.heading}>WORK</p>
                <div style={style.dividerContainer}>
                    <Divider sx={style.divider} variant="middle"></Divider>
                </div>
                <ul style={style.work}>
                    <li style={style.bold}>Code Coach at The Coder School SF</li>
                    <ul>
                        <li>Over 1 year of work experience</li>
                        <li>I work to teach kids from anywhere between <br/> the ages 7-14 on the basics of coding.</li>
                        <li>Primarily use Python and Scratch to teach coding <br/>concepts such as variables, functions, arrays, classes, and more.</li>
                        <li>The lessons are usually one hour a week per student, <br/> with myself teaching concepts via project-based learning.</li>
                    </ul>
                </ul>
                </div>
                <div>
                <p style={style.heading}>LANGUAGES</p>
                    <div style={style.dividerContainer}>
                        <Divider sx={style.divider} variant="middle"></Divider>
                    </div>
                    <div style={style.languagesContainer}>
                        <ul style={style.languages}>
                            <li style={style.bold}>HTML/CSS/JS</li>
                            <ul>
                                <li>Main language of choice. Through Node.js,<br/>I am familiar with back-end and front-end web development.</li>
                            </ul>
                            <li style={style.bold}>Python</li>
                            <ul>
                                <li>Used to make smaller-scale projects and algorithms.</li>
                                <li>Recreated Connect 4, Wordle, Visual Projects w/ Turtle, etc.</li>
                            </ul>
                            <li style={style.bold}>Unity/C#</li>
                            <ul>
                                <li>Used to recreate many 2D games</li>
                                <li>Recreated platformers, Galaga, Pong, etc.</li>
                            </ul>
                            <li style={style.bold}>Java</li>
                            <ul>
                                <li>Used many times in school projects.</li>
                            </ul>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Experience;



