difference = 0;
rightWrist = 0;
leftWrist = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550 , 500);

    canvas = createCanvas(550 , 450);
    canvas.position(560 , 110);

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);

}

function modelLoaded(){
    console.log('PoseNet Is Intialized!');

}

function gotPoses(results){
    console.log(results);
}

