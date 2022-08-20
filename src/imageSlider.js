import React from 'react';
import './App.css';
import { useState, useEffect} from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function ImageSlider(props){
    const [images, setImages] = useState([]);
    const [movement,setMovement] = useState('');
    const [index,setIndex] = useState(0);
    useEffect(() => {
        if(index===0){
            setImages(props.images.slice(-1).concat(props.images.slice(0,2)));
        }else if(index+1===props.images.length){
            setImages(props.images.slice(index-1,index+1).concat(props.images.slice(0,1)));
        }
        else{
            setImages(props.images.slice(index-1,index+2));
        }
        // setImages(props.images);
        console.log(images);
    }, [index]);
    function goBack(){
        if(index-1 < 0){
            setIndex(props.images.length-1);
        }else{
            setIndex(index-1);
        }
    }
    function goForward(){
        if(index+1 >= props.images.length){
            setIndex(0);
        }else{
            setIndex(index+1);
        }
    }
    return(
        <div style={{width:props.width,height:props.height}}>
            <div style={{width:"100%",height:"100%", whiteSpace:"nowrap",display:"flex",justifyContent:"center"}}>
            {images.map((src,index)=>{
                if(index===1){
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
