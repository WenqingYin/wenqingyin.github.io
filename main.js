var projects=document.getElementsByClassName("project-container");

var projectBtn=document.getElementById("projects"); 


//mouseover, change the background image, display the title 



for (var i=0; i<projects.length; i++){
	var currProject=projects[i];
	currProject.onmouseover=function(){
		this.getElementsByClassName('project-title')[0].style.visibility='visible';
		this.style.transition = 'all 0.5s ease-in-out';
		this.style.cursor= 'pointer';
	}
	currProject.onmouseout=function(){
		this.getElementsByClassName('project-title')[0].style.visibility='hidden';
		this.style.transition = 'all 0.5s ease-in-out';
	}

}



projectBtn.onclick=function(){
	window.scroll({
  		top: 800,
  		left: 0,
  		behavior: 'smooth'
	});
	console.log('yes');
}