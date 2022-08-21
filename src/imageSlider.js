import React from 'react';
import './App.css';
import { useState, useEffect, useRef} from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
let imagesList = [];
function ImageSlider(props){
    const [images, setImages] = useState([]);
    const [index,setIndex] = useState(0);
    const [movement,setMovement] = useState(0);
    const [translating,setTranslating] = useState('');
    const imageContainer = useRef(null);
    useEffect(() => {
        if(imagesList.length < 1){
            imagesList = props.images;
            setImages(props.images);
        }
        translate();
    }, [movement]);
    function translate(){
        if(movement != 0){
            imageContainer.current.style.transitionDuration = '1s';
        }else{
            imageContainer.current.style.transitionDuration = '0s';
        }
        imageContainer.current.style.transform = `translateX(${movement*-1}px)`;
    }
    function goBack(){
        if(translating !== "true"){
            setTranslating('true');
            if(index-1 < 0){
                setIndex(props.images.length-1);
            }else{
                setIndex(index-1);
            }
            setMovement(-740);
            setTimeout((()=>{
                imagesList.splice(0,0,imagesList[imagesList.length-1]);
                imagesList.splice(imagesList.length-1);
                setImages(imagesList);
                console.log(imageContainer.current.style.transitionDuration)
                setMovement(0);
                setTranslating('false');
            }), 1000)
        }
    }
    function goForward(){
        console.log(translating);
        if(translating !== "true"){
            setTranslating('true');
            if(index+1 >= props.images.length){
                setIndex(0);
            }else{
                setIndex(index+1);
            }
            setMovement(740);
            setTimeout((()=>{
                imagesList.push(imagesList[0]);
                imagesList.splice(0,1);
                setImages(imagesList);
                setMovement(0);
                setTranslating('false');
            }), 1000)
            console.log(images);
        }
    }
    return(
        <div style={{width:props.width,height:props.height}}>
            <div 
                style={{width:"100%",height:"100%", whiteSpace:"nowrap",display:'flex',justifyContent:"center"}}
                ref={imageContainer}
            >
            {images.map((src,num)=>{
                if(num===2){
                   return(<img src={require(`${ src}`)} width={"800px"} height={"100%"} alt={src}/>) 
                }else{
                    return(<img style={{opacity: "0.4"}} src={require(`${ src}`)} width={"800px"} height={"100%"} alt={src}/>)
                }
            })}
            </div>
            <IconButton onClick = {goBack}>
                <ArrowBackIosIcon color="primary"/>
            </IconButton>
            <IconButton onClick = {goForward}>
                <ArrowForwardIosIcon color="primary"/>
            </IconButton>
        </div>
    )
}
export default ImageSlider;     
