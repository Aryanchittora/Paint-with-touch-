var last_x , last_y;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
color = "black";
width = 1;
radius = 1;

var width = screen.width;
var new_width = screen.width - 70;

var new_height = screen.height - 300;

if (width<992) {
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";
}

canvas.addEventListener("touchstart",mytouchstart);
function mytouchstart(e) {
    console.log("my touchstart")
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;
    radius = document.getElementById("radius").value;
    
    last_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    last_touch_y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove",mytouchmove);
function mytouchmove(e) {
    console.log("my touchmove")

    current_x = e.touches[0].clientX - canvas.offsetLeft;
    current_y = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;

    console.log("Last position of x & y coordinates = ");
    console.log("x = " + last_x + "y = " + last_y);
    ctx.moveTo(last_x, last_y);

    console.log("Current position of x & y coordinates = ");
    console.log("x = " + current_x + "y = " + current_y);
    ctx.arc(current_x, current_y, radius, 0, 2 * Math.PI);
    ctx.stroke();


    last_x = current_x;
    last_y = current_y;
}


function clear_c() {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
