function preload(){
    
}
function draw(){

}
function setup(){
    video=createCapture(VIDEO);
    video.size(550, 550);
    canvas=createCanvas(550, 550);
    canvas.position(560, 100);
    PoseNet=ml5.poseNet(video, modelloaded);
    PoseNet.on('pose', gotPoses);
}
function modelloaded(){
    console.log("Your model is successfully loaded");
}
function gotPoses(results){
    if(results.length>0){
    console.log(results);
    }
}