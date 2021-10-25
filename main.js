rightwristX=0
leftwristx=0
noseX=0
noseY=0
difference=0
function setup()
{
    canvas = createCanvas(600,500);
    canvas.position(500,180);
    video=createCapture(VIDEO);
    video.size(600,500);

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses);
}
function draw()
{
background("Coquelicot")
stroke("black")
fill("red")
square(noseX,noseY,difference)
}

function modelLoaded()
{
    console.log("posenetinitializationcomplete");
}

function gotPoses(results)
{
  if (results.length > 0)
  {
console.log(results)
leftWrist=results[0].pose.leftWrist.x;
rightWrist=results[0].pose.rightWrist.x;
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
 difference=leftWrist-rightWrist;
  }
}