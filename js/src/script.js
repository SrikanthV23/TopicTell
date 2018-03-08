var name=window.prompt("please enter your name");
var username=document.getElementById("userName");
username.innerHTML +=" " +name;

function calcDuration(){
	var tD=document.getElementById("tripDura");
	var tM=document.getElementById("tripMessage");
	if(isNaN(tD.value)){
		alert("please enter number");
		tD.value="";
		return;
		
	}
	else if(tD.value < 4 ){
		tM.innerHTML +=  "Short trips are always worth it!";
	}
	else if(tD.value >= 5 || tD.value <= 7 ){
		tM.innerHTML +=  "Cool, you'll be there for almost a week!";
	}
	else{
		tM.innerHTML +=  "You'll have plenty of time to relax and have fun!";
	}
	var hours = tD.value * 24;
	var time= tD.value * 1440;
	var hDt=document.getElementById("hoursDuration");
	hDt.innerHTML += "That means you will be traveling for " + hours + " hours.";
	var timeDt=document.getElementById("timeDuration");
	timeDt.innerHTML += "That means you will be traveling for " + time + " minutes.";
}
