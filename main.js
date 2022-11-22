objectDetector="";

function setup()
{

canvas= createCanvas(600,500);
canvas.center();
video=createCapture(VIDEO);
video.hide();
objectDetector= ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("status").innerHTML= "status- Detecting Objects";

}

function draw()
{

image(video,0,0,600,500);
fill('#FF0000');
stroke('#8456e8');
}

function modelLoaded()
{

console.log("Model is loaded");
status = true;
objectDetector.detect(img,gotResult);


}

function gotResult(error,results)
{

if(error)
{

console.log(error); 

}
  
console.log(results);

objects = results;


}