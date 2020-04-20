var contentBlock=document.getElementsByClassName("content");

//alternate background color  
for (var i=0; i<contentBlock.length; i++){
	var currBlock=contentBlock[i];
	if (i%2!=0){
		currBlock.style.backgroundColor="#F7F7F7";
	}
}