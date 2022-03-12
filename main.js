var song1="";
var song2="";

scoreLeftwrist = 0;

song_1_and_2_status=0;

var leftWristX = 0;
var leftWristY = 0;

var RightWristX = 0;
var RightWristY = 0;

function preload(){
    song1 = loadSound("music.mp3");
song2 = loadSound("Theme song.mp3");
}

function setup(){
canvas = createCanvas(600, 600);
    canvas.position(230,255);
    video = createCapture(VIDEO);
    video.hide();    
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses );
    }

    
    function draw(){
        image(video, 0, 0, 600, 600);

        fill("#ff0000");
stroke("#ff0000");



if(scoreLeftwrist > 0.2){

    circle(leftWristX,leftWristY, 30);

    numberLeftwristY = Number(leftWristY);
    removeDecimals = floor(numberLeftwristY);
    volume = removeDecimals/500;
    document.getElementById("volume").innerHTML = "Volume= " + volume;
    song.setVolume(volume);

    song1.isPlaying()

     
song1.play();

}

    }

    function gotPoses(results){

        if(results.length > 0){

            scoreLeftwrist = results[0].pose.keypoints[9].score;
            console.log("scoreLeftWrist= " + scoreLeftwrist);

        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + " leftWristY = " + leftWristY);
        
        RightWristX = results[0].pose.rightWrist.x;
        RightWristY = results[0].pose.rightWrist.y;
        console.log("RightWristX = " + RightWristX + " RightWristY = " + RightWristY);

        

        }
        
        }

        function play(){
            song.play();
            song.setVolume(1);
        song.rate(1);
        }
        
        function modelLoaded(){
            console.log('poseNet is Initialized');
        }
        