canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "green" ;
canvas.getContext("2d").beginPath();
canvas.getContext("2d").strokeStyle=color;
canvas.getContext("2d").lineWidth=2;
canvas.getContext("2d").arc(200,200,40,0,2*Math.PI);
canvas.getContext("2d").stroke();

canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    color = document.getElementById("color_get").value;
    console.log(color);
    mouse_x = e.clientX-canvas.offsetLeft;
    mouse_y = e.clientY-canvas.offsetTop;
    console.log("X = " + mouse_x + " , " + "Y = " + mouse_y);
    circle(mouse_x,mouse_y);
}
function circle(mouse_x,mouse_y){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
    ctx.stroke();
}