var hue=0,startonce=false,ismove=true,score = -1, dumcycle = true;

function init(){
	backcycle();
	ismove = true;
}
function lancement(){
	alert("Acceptez vous les cookies ?\n et qu'on prenne vos données personnelles ?")
	let va = localStorage.getItem('valuecheck');
	if(va != null){
		score = va;
	}
	init();
}

function backcycle(){
	if(hue == 355){
		hue = 0;
		}
	document.body.style.background = "hsl("+hue+", 100%, 50%)"; //penser à le mettre en background color
	hue+=0.1*(score/50);
	animate = setTimeout(function(){backcycle();},15);
}

function monke(){
	// checkpoint();
	score++;
	if (score%10 == 0){
		checkpoint();
	}
	else{
		dum();
	}
	scoretest = document.getElementById('scoretest');
	scoretest.innerText="Score: "+score;
	imgmonke = document.getElementById('imgmonke');
	imgmonke.style.transform = "scale(1.1)";
	imgmonke.style.transition = "transform 0.1s ease"
	time= setTimeout(small, 100);
}
function small(){
	imgmonke = document.getElementById('imgmonke');
	imgmonke.style.transform = "scale(1)";
	imgmonke.style.transition = "transform 0.1s ease"
}	

function checkpoint(){
	audio = document.getElementById("audiomonke");
    audio.play();
	localStorage.setItem('valuecheck',score);
}

function dum(){
	if (dumcycle){
		audio = document.getElementById("audiodum1");
		dumcycle = false;
	}
	else{
		audio = document.getElementById("audiodum2");
		dumcycle = true;
	}
	audio.currentTime=0;
	audio.play();
}

function stop(){
	clearTimeout(animate);
   ismove = false;
}


function onswitch(){
	pause = document.getElementById("pause");
	if(ismove){
		stop();
		pause.src="image/pause.png"
	}
	else{
		init();
		pause.src="image/play.png"
	}
}

window.onload = function() {lancement();};