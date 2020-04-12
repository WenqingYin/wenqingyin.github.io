var projects=document.getElementsByClassName("project-container");
var projectBtn=document.getElementById("projects"); 


//mouseover, change the background 

for (var i=0; i<projects.length; i++){
	var currProject=projects[i];
	currProject.onmouseover=function(){
		this.style.backgroundColor="white";
		this.style.transition = "all 0.5s";
	}
	currProject.onmouseout=function(){
		this.style.backgroundColor="gray";
		this.style.transition = "all 0.5s";
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

