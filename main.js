function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_kick = loadSound("kick.wav");
	mario_gameover = loadSound("gameover.wav");
	mario_die = loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(800, 400)
	video.parent('Game_console');
	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
	
}
function modelLoaded(){
	console.log("Model Loaded!")
}

function gotPoses(resultS){
	if (resultS.length > 0){
		console.log(resultS);

		noseX = resultS[0].pose.nose.x;
		noseY = resultS[0].pose.nose.x;
	}
}
function draw() {
	game()
}






