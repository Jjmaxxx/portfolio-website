import React, { useEffect, useRef } from 'react'
let animationFrame;
let shapes = [];
let prevWindowWidth,prevWindowHeight,transformWidth,transformHeight;

const Canvas = props => {
  const canvasRef = useRef(null);
  let draw = (ctx)=>{
    ctx.fillStyle = 'rgba(255, 255, 255,0.3)';
    ctx.fillRect(0,0,ctx.width,ctx.height)
    for(let i=0;i<shapes.length;i++){
      shapes[i].update();
    }
  }
  //useEffect runs with component is actually mounted so canvas doesnt return null
  useEffect(()=>{
    let canvas = canvasRef.current;
    let ctx = canvas.getContext('2d');
    canvas.width = props.windowwidth;
    canvas.height = props.windowheight;
    transformWidth = canvas.width/prevWindowWidth;
    transformHeight = canvas.height/prevWindowHeight;
    prevWindowHeight = props.windowheight;
    prevWindowWidth = props.windowwidth;
    window.cancelAnimationFrame(animationFrame);
    const render = () =>{
      draw(ctx);
      animationFrame = window.requestAnimationFrame(render);
    }
    render()
    class Shape{  
        constructor(rotationSpeed,size){
            this.x = canvas.width/2;
            this.y = canvas.height/2;
            this.size = size;
            this.ang=0;
            this.rotationSpeed = rotationSpeed;
        }
        update(){
            this.ang+=this.rotationSpeed;
            ctx.beginPath();
            ctx.fillStyle = "black";
            ctx.fill();
        }
    }
    class Sphere extends Shape{
        update(){
            ctx.save();
            super.update();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.ang);
            ctx.arc(0,0,20*this.size,0,Math.PI * 2);
            ctx.ellipse(0, 0, 19*this.size, 2.5, 0,  0, 2 * Math.PI);
            ctx.stroke();
            ctx.restore();
        }
    }
    class Sphere2 extends Shape{
        update(){
            ctx.save();
            super.update();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.ang);
            ctx.arc(0,0,20*this.size,0,Math.PI * 2);
            ctx.moveTo(2.5,0);
            ctx.ellipse(0, 0, 2.5, 19*this.size, 0,  0, 2 * Math.PI);
            ctx.stroke();
            ctx.restore();
        }
    }
    if(shapes.length === 0){
        shapes.push(new Sphere(0.01,1)); 
        shapes.push(new Sphere(-0.01,1)); 
        shapes.push(new Sphere2(0.01,1)); 
        shapes.push(new Sphere2(-0.01,1)); 
        shapes.push(new Sphere(0.01,2)); 
        shapes.push(new Sphere(-0.01,2)); 
        shapes.push(new Sphere2(0.01,2)); 
        shapes.push(new Sphere2(-0.01,2)); 
    }
  },[props.windowwidth,props.windowheight])
  
  return <canvas ref={canvasRef} {...props}/>
}

export default Canvas