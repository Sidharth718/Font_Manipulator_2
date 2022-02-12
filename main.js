function preload()
{

}

function setup(){
    canvas = createCanvas(450, 450)
    canvas.position(800,150)
    video = createCapture(VIDEO)
    video.size(400, 400)
    video.position(200,180)
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function gotPoses(results){

    if (results.length > 0){
        console.log(results)
    }
}

function modelLoaded(){
    console.log("Model Successfuly loaded")
}

function draw(){
    background('yellow')
}