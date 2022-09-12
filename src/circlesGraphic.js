import React, { useEffect, useRef } from 'react'
let animationFrame;
let circlePositions = [];
let prevWindowWidth,prevWindowHeight,transformWidth,transformHeight;
const Canvas = props => {
  const canvasRef = useRef(null);
  let circles = [];
  let draw = (ctx)=>{
    ctx.fillStyle = 'rgb(20, 40, 80)';
    ctx.fillRect(0,0,props.windowwidth,props.windowheight);
    for(let i=0;i<circles.length;i++){
        circles[i].update();
        circles[i].collide();
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
    class Circle{
        constructor(x,y,vx,vy,num){
          this.x = x;
          this.y = y;
          this.xVelocity = vx;
          this.yVelocity = vy;
          this.quadrant = 0;
          this.id = num;
        }
        update(){
          this.x += this.xVelocity/1500;
          this.y += this.yVelocity/1500;
          ctx.beginPath();
          ctx.arc(this.x, this.y, 5, 0, Math.PI * 2);
          ctx.fillStyle = "#27496D";
          ctx.fill();
          if(this.x > canvas.width || this.x < 0 ){
            this.xVelocity*=-1;
          }
          else if(this.y > canvas.height || this.y < 0){
            this.yVelocity*=-1;
          }
          if(this.x < canvas.width/2 && this.y > canvas.height/2){
            this.quadrant = 1;
          }else if(this.x > canvas.width/2 && this.y > canvas.height/2){
              this.quadrant = 2;
          }else if(this.x < canvas.width/2 && this.y < canvas.height/2){
              this.quadrant = 3;;
          }else if(this.x > canvas.width/2 && this.y < canvas.height/2){
              this.quadrant = 4;
          }
          circlePositions[this.id] = {x:this.x,y:this.y,vx: this.xVelocity, vy:this.yVelocity}
        }
        collide(){
          for(let i=0; i<circles.length;i++){
            if(circles[i].quadrant === this.quadrant){
              if(Math.sqrt(Math.pow(circles[i].x-this.x,2)+ Math.pow(circles[i].y-this.y,2)) < 100){
                ctx.beginPath();
                ctx.moveTo(this.x, this.y); 
                ctx.lineTo(circles[i].x, circles[i].y);
                ctx.strokeStyle = "#27496D";   
                ctx.stroke(); 
              }
            }
          }
        }
      }
    if(circlePositions.length === 0){
      for(let i=0; i<props.numberOfCircles;i++){
        circles.push(new Circle(Math.floor(Math.random() * canvas.width),Math.floor(Math.random() * canvas.height),Math.floor(Math.random()* (100-(-100))) + (-100),Math.floor(Math.random()* (100-(-100))) + (-100),i));
      }
    }else{
      for(let i=0; i<props.numberOfCircles;i++){
        circles.push(new Circle(circlePositions[i].x * transformWidth,circlePositions[i].y * transformHeight,circlePositions[i].vx,circlePositions[i].vy,i));
      }
    }
  },[props.windowwidth,props.windowheight])
  
  return <canvas ref={canvasRef} {...props}/>
}

export default Canvas