import React from 'react';
import './App.css';
import { useState, useEffect} from 'react';
function ImageSlider(props){
    const [images, setImages] = useState([]);
    useEffect(() => {
        setImages(props.images);
    }, [images]);
    return(
        <div style={{width:props.width,height:props.height, whiteSpace:"nowrap",overflow: "hidden"}}>
            {images.map(src=>{
                return(<img src={require(`${ src}`)} width={"800px"} height={"100%"}/>)
            })}
        </div>
    )
}
export default ImageSlider;