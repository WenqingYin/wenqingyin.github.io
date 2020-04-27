var bubbleNum=5;
var speedBook=[-5,-4,-3,-2,-1,1,2,3,4,-5];
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
	this.x=random(0,windowWidth);
	this.y=random(0,windowHeight);
	this.r=random(700,1000);
	this.speedX=random(speedBook);
	this.speedY=random(speedBook);

	
	this.display=function(){
		image(imgSrc, this.x, this.y);
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