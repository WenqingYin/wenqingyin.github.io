


var projects=document.getElementsByClassName("project-container");
var projectBtn=document.getElementById("projects"); 
var projectImg=document.getElementsByClassName("project-img");
var projectTitle=document.getElementsByClassName("project-title");


//mouseover, change the background image, display the title 
for (var i=0; i<projects.length; i++){
	var currProject=projects[i];
	currProject.onmouseover=function(){
		this.getElementsByClassName('project-title')[0].style.opacity=1;
		//this.getElementsByClassName('project-title')[0].style.animationName="upward";
		//this.getElementsByClassName('project-title')[0].style.animationDuration='0.4s';
		this.getElementsByClassName('cover-img')[0].style.filter='brightness(0.8)';
		this.style.cursor= 'pointer';
	}
	currProject.onmouseout=function(){
		this.getElementsByClassName('project-title')[0].style.opacity=0;
		this.getElementsByClassName('cover-img')[0].style.filter='brightness(1)';
	}

}



projectBtn.onclick=function(){
	var h = window.innerHeight;
	window.scroll({
  		top: h,
  		left: 0,
  		behavior: 'smooth'
	});
	console.log('yes');
}


