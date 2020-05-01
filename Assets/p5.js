var canvas;
var colorBook=['#D1E8EA'];
var wordBook=['Hi'];
var speedBook=[-2,-1,1,2];
var bubbleNum=5;
var bubbles=[];
var pg;

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
	this.r=random(300,400);
	this.color=random(colorBook);
	this.speedX=random(speedBook);
	this.speedY=random(speedBook);

	console.log(this.color);

	this.display=function(){
		noStroke();
		var fillColor=random(colorBook);
		fill(fillColor);
		circle(this.x,this.y,this.r)

		/*
		var r=163;
		var g=230;
		var b=237;
		for (var currR=this.r; currR>0; --currR){
			noStroke();
			var alpha=(this.r-currR)*Math.floor(255/this.r); 
			fill(r,g,b,alpha);
			circle(this.x,this.y,currR);
		}
		*/
	}

	this.move=function(){
		this.x=this.x+this.speedX;
		this.y=this.y+this.speedY;

		//check collision with the boundary
		var distanceXLeft=this.x-this.r;
		var distanceXRight=this.x+this.r;
		var distanceYUp=this.y-this.r;
		var distanceYDown=this.y+this.r; 

		if (distanceXRight<=-10 || distanceXRight>=windowWidth+10){
			this.speedX=-this.speedX;
		}

		if (distanceYUp<=-10 || distanceYDown>=windowHeight+10){
			this.speedY=-this.speedY;
		}

	}
	//add bounce effect if possible 
}

function draw(){
	background('white');
	for (var i=0; i<bubbles.length; i++){
		bubbles[i].move();
		bubbles[i].display();
	}

}
