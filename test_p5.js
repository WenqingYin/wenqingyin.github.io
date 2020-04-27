var bubbleNum=4;
var speedBook=[-3,-2,-1,1,2,3];
var bubbles=[];

function windowResized(){
	console.log("resized");
	resizeCanvas(windowWidth, windowHeight);
}

let imgSrc;

function preload() {
  imgSrc = loadImage('pic/blue.png');
  console.log('yes');
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
	//image(imgSrc, 10, 10, 50, 50);
}

function Bubble(){
	this.x=random(0,width);
	this.y=random(0,height);
	this.r=random(400,600);
	this.speedX=random(speedBook);
	this.speedY=random(speedBook);

	
	this.display=function(){
		image(imgSrc, this.x, this.y, this.r, this.r);
	}

	this.move=function(){
		this.x=this.x+this.speedX;
		this.y=this.y+this.speedY;

		//check collision with the boundary
		var distanceXLeft=this.x-this.r;
		var distanceXRight=this.x+this.r;
		var distanceYUp=this.y-this.r;
		var distanceYDown=this.y+this.r; 

		if (distanceXRight<=0 || distanceXRight>=windowWidth){
			this.speedX=-this.speedX;
		}

		if (distanceYUp<=0 || distanceYDown>=windowHeight){
			this.speedY=-this.speedY;
		}

	}

}

function draw(){
	background('white');
	for (var i=0; i<bubbles.length; i++){
		bubbles[i].move();
		bubbles[i].display();
	}

}