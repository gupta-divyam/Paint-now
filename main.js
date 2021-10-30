canvas= document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
mouseposition= "";
canvas.addEventListener("mousedown", mouse_down)
function mouse_down() {
mouseposition= "mousedown"
}
canvas.addEventListener("mouseup", mouse_up)
function mouse_up() {
mouseposition= "mouseup"
}
canvas.addEventListener("mouseleave", mouse_leave)
function mouse_leave() {
mouseposition= "mouseleave"
}
canvas.addEventListener("mousemove", mouse_move)
function mouse_move(e) {
  widthVa= document.getElementById("widthD").value
  colorva= document.getElementById("colorD").value
  radius= document.getElementById("radiD").value

currentX_position= e.clientX- canvas.offsetLeft;
currentY_position= e.clientY- canvas.offsetTop;

if(mouseposition == "mousedown"){
    console.log("inSideIt")
    ctx.beginPath()
    ctx.strokeStyle= colorva;
  ctx.lineWidth= widthVa;

  ctx.moveTo(lastX_pos, lastY_pos)

  ctx.arc(currentX_position, currentY_position, radius, 0, 2*Math.PI)
  ctx.stroke() 
}
lastX_pos= currentX_position;
lastY_pos= currentY_position;
}
function clear1(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}
function canvasfil() {
  filcol=document.getElementById("filllcolllm").value
ctx.rect(0, 0, canvas.width,canvas.height);
ctx.fillStyle = filcol;
ctx.fill();
}
