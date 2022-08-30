import React from 'react';
import './App.css';
import { useState, useEffect, useRef} from 'react';
import ProjectDialog from './projectsDialog.js';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CircleIcon from '@mui/icons-material/Circle';
let imagesList = [];
function ProjectSlider(props){
    const [images, setImages] = useState([]);
    const [index,setIndex] = useState(0);
    const [translating,setTranslating] = useState('');
    const [dialog, setDialogNum] = useState('false');
    const [dots,setDots] = useState([]);
    const imageContainer = useRef(null);
    useEffect(() => {
        if(imagesList.length < 1){
            imagesList = props.images;
            setImages(props.images);
            console.log('a');
            let list = [];
            for(let i=0;i < props.images.length;i++){
                list.push(i);
            }
            setDots(list);
        }
    }, []);
    function goBack(){
        if(translating !== "true"){
            setTranslating('true');
            if(index-1 < 0){
                setIndex(props.images.length-1);
            }else{
                setIndex(index-1);
            }
            imageContainer.current.style.transitionDuration = '0.7s';
            imageContainer.current.style.transform = `translateX(${-710*-1}px)`;
            setTimeout((()=>{
                imagesList.splice(0,0,imagesList[imagesList.length-1]);
                imagesList.splice(imagesList.length-1);
                setImages(imagesList);
                imageContainer.current.style.transitionDuration = '0s';
                imageContainer.current.style.transform = `translateX(0px)`;
                setTranslating('false');
            }), 690)
        }
    }
    function goForward(){
        if(translating !== "true"){
            setTranslating('true');
            if(index+1 >= props.images.length){
                setIndex(0);
            }else{
                setIndex(index+1);
            }
            imageContainer.current.style.transitionDuration = '0.7s';
            imageContainer.current.style.transform = `translateX(${710*-1}px)`;
            setTimeout((()=>{
                imagesList.push(imagesList[0]);
                imagesList.splice(0,1);
                setImages(imagesList);
                imageContainer.current.style.transitionDuration = '0s';
                imageContainer.current.style.transform = `translateX(0px)`;
                setTranslating('false');
            }), 690)
        }
    }
    function openDialog(num){
        setDialogNum("true");
    }
    return(
        <div>
            <div style={{width:props.width,height:props.height,display:"flex"}}>
                <div 
                    style={{width:"100%",height:"100%", whiteSpace:"nowrap",display:'flex',justifyContent:"center",transform:`translateX(0px)`}}
                    ref={imageContainer}
                >
                {images.map((src,num)=>{
                    if(num===Math.floor(images.length/2)){
                    return(<img style={{cursor:"pointer",border:"2px solid #27496D"}} onClick={()=>{openDialog(num)}} src={require(`${ src}`)} width={"800px"} height={"100%"} alt={src}></img>) 
                    }else{
                        return(<img style={{opacity: "0.4"}} src={require(`${ src}`)} width={"800px"} height={"100%"} alt={src}/>)
                    }
                })}
                </div>
                <div style={{width:"100%",height:"100%",top:`${props.height/2}px`, marginLeft: '-100%',display:"flex",justifyContent:"center"}}>
                    {translating!=="true" &&
                        <div style={{display:"flex",justifyContent:"space-between",width:"710px"}}>
                            <IconButton disableRipple onClick = {goBack}>
                                <ArrowBackIosIcon color="primary"/>
                            </IconButton>
                            <IconButton disableRipple onClick = {goForward}>
                                <ArrowForwardIosIcon color="primary"/>
                            </IconButton>
                        </div>
                    }
                </div>
                {dialog === 'true' &&
                    <ProjectDialog num={index} setParentNum={setDialogNum}/>
                }
            </div>
            <div style={{width:"100%",display:"flex",justifyContent:"center",gap:"10px",marginTop:"5px"}}>
                {dots.map((circleNum)=>{
                    if(circleNum === index){
                        return (<CircleIcon style={{fontSize:"12px"}} color="secondary"/>);
                    }else{
                        return (<CircleIcon style={{fontSize:"12px"}} fontSize="small" color="primary"/>);
                    }
                })}
            </div>
        </div>
    )
}
export default ProjectSlider;