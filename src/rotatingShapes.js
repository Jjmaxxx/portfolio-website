import React, { useEffect, useRef } from 'react'
let animationFrame;
let shapes = [];
let shapesPosition = [];
let mouseDown = false;
let interval;
let mouseX, mouseY;
let prevWindowWidth,prevWindowHeight,transformWidth,transformHeight;
window.addEventListener('mousedown', dragging);
window.addEventListener("mousemove", getMousePos)
window.addEventListener('mouseup', stopDragging);
function dragging() {
  let shapeNum = checkIfOverShape();
  if(shapeNum || shapeNum === 0){
    mouseDown = true;
     interval = setInterval(function() {
      if(mouseDown) {
        shapesPosition[shapeNum].x = mouseX;
        shapesPosition[shapeNum].y = mouseY;
      }
    },1)
  }
}
function getMousePos(e){
  mouseX = e.clientX;
  mouseY = e.clientY;
  let check = checkIfOverShape();
  if(check || check === 0){
    document.body.style.cursor = "pointer";
  }else{
    document.body.style.cursor = "default";
  }
}
function stopDragging(){
  clearTimeout(interval);
  mouseDown = false;
}
function checkIfOverShape(){
  for(let i=0;i<shapesPosition.length;i++){
    if(mouseX > shapesPosition[i].x-25 && mouseX < shapesPosition[i].x + 25 && mouseY > shapesPosition[i].y-25 && mouseY < shapesPosition[i].y + 25){
      return i;
    }
  }
  return false;
}
const Canvas = props => {
  const canvasRef = useRef(null);
  let draw = (ctx)=>{
    // ctx.fillStyle = "rgb(0,0,0)";
    ctx.clearRect(0, 0, props.windowwidth, props.windowheight);
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
    // window.removeEventListener('mousedown',dragging);
    // window.removeEventListener('mouseup',stopDragging);
    // window.removeEventListener('mousemove',getMousePos);
    const render = () =>{
      draw(ctx);
      animationFrame = window.requestAnimationFrame(render);
    }
    render()
    class Shape{  
      constructor(id){
        this.x = Math.floor(Math.random() * canvas.width);
        this.y = Math.floor(Math.random() * canvas.height);
        shapesPosition.push({x:this.x,y:this.y,id:id});
        // console.log(shapesPosition[0].x)
        this.xVelocity = Math.floor(Math.random()* (100-(-100))) + (-100);
        this.yVelocity = Math.floor(Math.random()* (100-(-100))) + (-100);
        this.quadrant = 0;
        this.ang=0;
        if(this.xVelocity >0){
          this.rotationSpeed = Math.random()* (0.01-(0.001)) + (0.001);
        }else{
          this.rotationSpeed = Math.random()* (-0.01-(-0.001)) + (-0.001);
        }
        this.id = id;
      }
      update(){
        shapesPosition[this.id].x += this.xVelocity/800;
        shapesPosition[this.id].y += this.yVelocity/800;
        this.ang+=this.rotationSpeed;
        ctx.beginPath();
        ctx.strokeStyle = "#27496D";
        ctx.lineWidth = 2.5;
        if(shapesPosition[this.id].x > canvas.width){
          shapesPosition[this.id].x = 0;
        }else if(shapesPosition[this.id].x < 0 ){
          shapesPosition[this.id].x=canvas.width;
        }
        else if(shapesPosition[this.id].y > canvas.height){
          shapesPosition[this.id].y = 0;
        }
        else if(shapesPosition[this.id].y < 0){
          shapesPosition[this.id].y=canvas.height;
        }
      }
    }
    class Sphere extends Shape{
      update(){
        ctx.save();
        super.update();
        ctx.translate(shapesPosition[this.id].x, shapesPosition[this.id].y);
        ctx.rotate(this.ang);
        ctx.arc(0,0,20,0,Math.PI * 2);
        ctx.ellipse(0, 0, 19, 2.5, 0,  0, 2 * Math.PI);
        ctx.stroke();
        ctx.restore();
      }
    }
    class Box extends Shape{
      update(){
        ctx.save();
        super.update();
        ctx.translate(shapesPosition[this.id].x, shapesPosition[this.id].y);
        ctx.rotate(this.ang);
        ctx.rect(-15,-15,30,30);
        ctx.lineTo(-5,-5);
        ctx.rect(-5,-5,30,30);
        ctx.moveTo(-15,15);
        ctx.lineTo(-5,25);
        ctx.moveTo(15,-15);
        ctx.lineTo(25,-5);
        ctx.moveTo(15,15);
        ctx.lineTo(25,25);
        ctx.stroke();
        ctx.restore();
      }
    }
    class TriangularPrism extends Shape{
      update(){
        ctx.save();
        super.update();
        ctx.translate(shapesPosition[this.id].x, shapesPosition[this.id].y);
        ctx.rotate(this.ang);
        ctx.translate(-30,20);
        ctx.lineTo(40, 0);
        ctx.lineTo(20, -35);
        ctx.lineTo(0, 0);
        ctx.lineTo(40, 0);
        ctx.moveTo(15,-15);
        ctx.lineTo(55, -15);
        ctx.lineTo(35, -50);
        ctx.lineTo(15, -15);
        ctx.moveTo(35,-50);
        ctx.lineTo(20,-35);
        ctx.moveTo(0,0);
        ctx.lineTo(15,-15);
        ctx.moveTo(40,0);
        ctx.lineTo(55,-15);
        ctx.stroke();
        ctx.restore();
      }
    }
    class Cylinder extends Shape{
      update(){
        ctx.save();
        super.update();
     ctx.translate(shapesPosition[this.id].x, shapesPosition[this.id].y);
        ctx.rotate(this.ang);
        ctx.translate(20,-20);
        ctx.ellipse(-20, 0, 20, 8, 0,  0, 2 * Math.PI);
        ctx.lineTo(0,40);
        ctx.ellipse(-20, 40, 20, 8, 0,  0, 2 * Math.PI);
        ctx.moveTo(-40,0);
        ctx.lineTo(-40,40);
        ctx.stroke();
        ctx.restore();
      }
    }
    class Cone extends Shape{
      update(){
        ctx.save();
        super.update();    
        ctx.translate(shapesPosition[this.id].x, shapesPosition[this.id].y);
        ctx.rotate(this.ang);
        ctx.translate(20,10);        
        ctx.ellipse(-20, 0, 20, 8, 0,  0, 2 * Math.PI);
        ctx.lineTo(-20,-40);
        ctx.moveTo(-40,0);
        ctx.lineTo(-20,-40);
        ctx.stroke();
        ctx.restore();
      }
    }
    if(shapesPosition.length === 0){
      shapes.push(new Sphere(0)); 
      shapes.push(new Box(1));
      shapes.push(new TriangularPrism(2)); 
      shapes.push(new Cylinder(3));
      shapes.push(new Cone(4));
      shapes.push(new Sphere(5)); 
      shapes.push(new Box(6));
      shapes.push(new TriangularPrism(7)); 
      shapes.push(new Cylinder(8));
      shapes.push(new Cone(9));
    }else{
      for(let i=0;i<shapesPosition.length;i++){
        shapesPosition[i].x *= transformWidth;
        shapesPosition[i].y *= transformHeight;
      }
    }
  },[props.windowwidth,props.windowheight])
  
  return <canvas ref={canvasRef} {...props}/>
}

export default Canvas