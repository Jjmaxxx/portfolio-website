import React, { useEffect, useRef } from 'react'

const Canvas = props => {
  const canvasRef = useRef(null);
  let circles = [];
  let draw = (ctx)=>{
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height);
    for(let i=0;i<circles.length;i++){
        circles[i].update();
        circles[i].collide();
    }
  }
  //useEffect runs with component is actually mounted so canvas doesnt return null
  useEffect(()=>{
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const render = () =>{
        draw(ctx);
        window.requestAnimationFrame(render);
    }
    render()
    class Circle{
        constructor(){
          this.x = Math.floor(Math.random() * canvas.width);
          this.y = Math.floor(Math.random() * canvas.height);
          this.xVelocity = Math.floor(Math.random()* (100-(-100))) + (-100);
          this.yVelocity = Math.floor(Math.random()* (100-(-100))) + (-100);
          this.quadrant = 0;
        }
        update(){
          this.x += this.xVelocity/3000;
          this.y += this.yVelocity/3000;
          ctx.beginPath();
          ctx.arc(this.x, this.y, 5, 0, Math.PI * 2);
          ctx.fillStyle = "#DCD6F7";
          ctx.fill();
          if(this.x > canvas.width || this.x < 0 ){
            this.xVelocity*=-1;
          }
          else if(this.y > canvas.height || this.y < 0){
            this.yVelocity*=-1;
          }
        //   if(this.x > canvas.width){
        //     this.x = 0;
        //   }else if(this.x < 0 ){
        //     this.x=canvas.width;
        //   }
        //   else if(this.y > canvas.height){
        //     this.y = 0;
        //   }
        //   else if(this.y < 0){
        //     this.y=canvas.height;
        //   }
          if(this.x < canvas.width/2 && this.y > canvas.height/2){
            this.quadrant = 1;
          }else if(this.x > canvas.width/2 && this.y > canvas.height/2){
              this.quadrant = 2;
          }else if(this.x < canvas.width/2 && this.y < canvas.height/2){
              this.quadrant = 3;;
          }else if(this.x > canvas.width/2 && this.y < canvas.height/2){
              this.quadrant = 4;
          }
        }
        collide(){
          for(let i=0; i<circles.length;i++){
            if(circles[i].quadrant === this.quadrant){
              if(Math.sqrt(Math.pow(circles[i].x-this.x,2)+ Math.pow(circles[i].y-this.y,2)) < 100){
                ctx.beginPath();
                ctx.moveTo(this.x, this.y); 
                ctx.lineTo(circles[i].x, circles[i].y);
                ctx.strokeStyle = "#DCD6F7";   
                ctx.stroke(); 
              }
            }
          }
        }
      }
    for(let i=0; i<50;i++){
        circles.push(new Circle());
    }
  },[])
  
  return <canvas ref={canvasRef} {...props}/>
}

export default Canvas