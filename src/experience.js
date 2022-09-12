import React from 'react';
import './App.css';
import Divider from '@mui/material/Divider';
import styles from './utils/styles.js';
function Experience(props){
    const style = styles;
    return(
        <div style={{width:props.windowwidth,display:'flex',flexDirection:"column",alignItems:"center",gap:"100px",marginBottom:"30px",justifyContent:"space-around"}}>
            <div style={style.experiencePage}>
            <div>
                <p style={style.heading}>LANGUAGES</p>
                    <div style={style.dividerContainer}>
                        <Divider sx={style.divider} variant="middle"></Divider>
                    </div>
                    <div style={style.languagesContainer}>
                        <ul style={style.languages}>
                            <li style={style.bold}>HTML/CSS/JS</li>
                            <ul>
                                <li>Used for about 4 years. Very Proficient</li>
                                <li>Made many personal projects and by using Node.js,<br/>I am familiar with back-end and front-end web development.</li>
                            </ul>
                            <li style={style.bold}>Python</li>
                            <ul>
                                <li>Used for around 2 years. Proficient</li>
                                <li>Used to make many smaller-scale projects and algorithms.</li>
                            </ul>
                            <li style={style.bold}>Unity/C#</li>
                            <ul>
                                <li>Used for around 1 year. Proficient</li>
                                <li>Mostly worked to recreate many 2D games with Unity.</li>
                            </ul>
                            <li style={style.bold}>Java</li>
                            <ul>
                                <li>Used for about a year. Relatively Proficient</li>
                                <li>Can use it, but have not made many personal projects with it.</li>
                            </ul>
                        </ul>
                    </div>
                </div>
                <div>
                <p style={style.heading}>WORK</p>
                <div style={style.dividerContainer}>
                    <Divider sx={style.divider} variant="middle"></Divider>
                </div>
                <ul style={style.work}>
                    <li style={style.bold}>Code Coach at The Coder School SF</li>
                    <ul>
                        <li>Been working here for over a year</li>
                        <li>I work to teach kids from anywhere between <br/> the ages 7-14 on the basics of coding.</li>
                        <li>Primarily use Scratch and Python to teach coding <br/>concepts such as variables, functions, arrays, classes, and more.</li>
                        <li>The lessons are usually one hour a week per student, <br/> with myself teaching concepts to the student through projects.</li>
                    </ul>
                </ul>
            </div>
            </div>

        </div>
    )
}
export default Experience;



