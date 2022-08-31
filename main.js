//se quitan variables


function preload() {//se agregan variables
	mario_gameover = loadSound("gameover.wav");
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_kick = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav");
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console');
	poseNet = ml5.poseNet(video,modelLoaded);
	poseNet.on('pose', gotPoses);
}
function modelLoaded(){
	console.log("Modelo Cargado");
}
function gotPoses(results){
	if(results.lenght>0){
		console.log(results);
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
	}
}
function draw() {
	game();
}


/*
function game(){
	console.log("noseX="+noseX + "noseY= "+noseY );
}
function sartGame(){
	Gamestatus = "start";
	document.getElementById("status").innerHTML = "El juego esta cargado";
}
*/





