var scrollButton=document.querySelectorAll('.nav-menu a');

for(var i=0; i<scrollButton.length;i++){
scrollButton[i].addEventListener('click', function(event){
	var targetSectionId=this.textContent.trim().toLowerCase();
	var targetSection=document.getElementById(targetSectionId);
	var yCoordinate=targetSection.getBoundingClientRect();
	targetPos=yCoordinate['y'];
	var currPos=0;
	event.preventDefault();
	var scroll=setInterval(function(){
		if(currPos>=targetPos){
			clearInterval(scroll);
			return
		}
		currPos+=50;
		window.scrollBy(0,50);
	
	},25);

});
}