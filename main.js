noseX=""
noseY=""

function preload(){
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    image(video, 0 ,0 ,300 ,300);
}

function take_snapshot(){
    save('myFilterImage.png');
}

function modelloaded(){
    console.log('PoseNet is loaded');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log('Nose X = '+ results[0].pose.nose.x);
        console.log('Nose Y = '+ results[0].pose.nose.Y);

        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log(noseX +" "+noseY)
    }
}