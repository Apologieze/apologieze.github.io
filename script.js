
function pop() {
  let person = prompt("Veuillez entrer le mot de passe");
  if (person == "51966") {
	  window.location = '2.html';}
}



function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function color() {
	image1 = document.getElementById("i1");
  image1.style.color = getRandomColor();
}


var animate, left=0, imgObj=null, dirr=true, ismove = true, hue=0;

function init(){
	
   imgObj = document.getElementById('move');
   imgObj.style.position= 'absolute';
   imgObj.style.top = '420px';
   imgObj.style.left = '-200px';
   dirr = true
   //imgObj.style.visibility='hidden';

   moveRight();
}

function moveRight(){
	ismove = true;
    left = parseInt(imgObj.style.left, 10);
	
	if (dirr == true) {
		imgObj.style.left = (left + 10) + 'px';
		if (left >= 1550) {
				dirr = false
			}
		}
	else{
		imgObj.style.left = (left - 10) + 'px';
		if (left <= -200) {
				dirr = true
			}
	}
    //if (1600 >= left && dirr == false) {
		//console.log(left)
        //imgObj.style.left = (left + 5) + 'px';
        //imgObj.style.visibility='visible'; 1600

    animate = setTimeout(function(){moveRight();},15);

}

function stop(){
   clearTimeout(animate);
   ismove = false;
}

function onswitch(){
	if(ismove){
		stop();
	}
	else{
		moveRight();
	}
}

function cycle(){
	if(hue == 355){
		hue = 0;
		}
	image2 = document.getElementById("i2");
	image2.style.color = "hsl("+hue+", 100%, 50%)"; //penser à le mettre en background color
	hue++;
	animate2 = setTimeout(function(){cycle();},15);
}
window.onload = function() {init();};

