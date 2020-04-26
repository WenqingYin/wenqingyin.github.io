var canvas;
var colorBook=['#42C3D1','#F8E71C'];
var wordBook=['Hi'];
var speedBook=[10,15,20];
var bubbleNum=4;
var bubbles=[];

function windowResized(){
	console.log("resized");
	resizeCanvas(windowWidth, windowHeight);
}

function setup(){
	canvas=createCanvas(windowWidth, windowHeight);
	canvas.position(0,0);
	background('white');
	canvas.style("z-index","-1")
	//add bubbles
	for (var i=0; i<bubbleNum; i++){
		bubbles[i]=new Bubble();
	}
}

function Bubble(){
	this.x=random(0,width);
	this.y=random(0,height);
	this.r=random(100,300);
	this.color=random(colorBook);
	this.speed=random(speedBook);

	console.log(this.color, this.speed);

	this.display=function(){
		noStroke();
		fill(this.color);
		circle(this.x,this.y,this.r);
	}

	this.move=function(){
		this.x=this.x+random(-1,1)*this.speed;
		this.y=this.y+random(-1,1)*this.speed;
	}
	//add bounce effect if possible 
}

function draw(){
	for (var i=0; i<bubbles.length; i++){
		bubbles[i].move();
		bubbles[i].display();
	}
}
