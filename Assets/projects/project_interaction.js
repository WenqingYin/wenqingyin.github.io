

var contentBlock=document.getElementsByClassName("content");
var projectBtn=document.getElementById("projects"); 

//alternate background color  
for (var i=0; i<contentBlock.length; i++){
	var currBlock=contentBlock[i];
	if (i%2!=0){
		currBlock.style.backgroundColor="#F7F7F7";
	}
}


// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByClassName("img-fluid");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

for (var i=0; i<img.length; i++){
	currImg=img[i]
	currImg.onclick = function(){
	  modal.style.display = "block";
	  modalImg.src = this.src;
	  captionText.innerHTML = this.alt;
	}
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}



