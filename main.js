function setup()
{

canvas= createCanvas(600,500);
canvas.center();
video=createCapture(VIDEO);
video.hide();
document.getElementById("status").innerHTML= "status- Detecting Objects";

}

function draw()
{

image(video,0,0,600,500);
fill('#FF0000');
stroke('#8456e8');
}