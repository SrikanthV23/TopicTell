var name=window.prompt("please enter your name");
var username=document.getElementById("userName");
username.innerHTML +=" " +name;
var tD=document.getElementById("tripDura");
function calcDuration(){
	
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

var budgetCalc=document.getElementById("calcBudget");
var indianRupee= 65.14;
budgetCalc.onclick = function(){
	var usAmount = document.getElementById("usAmount");
	var convAmount=usAmount.value * indianRupee;
	var perDay = convAmount/tD.value; 
	var tenUsd =convAmount / 10; 
	var fiveOOUsd =convAmount / 500; 
	var totalCost=document.getElementById("totalCost");
	var perDayCost=document.getElementById("totalCostpday");
	var tenDollars=document.getElementById("tenDollars1");
	var fiveOODollars=document.getElementById("fiveOODollars1");
	totalCost.innerHTML = "Total cost for your journey is" + convAmount + "Rs" ;
	perDayCost.innerHTML = "It looks you like to spend" +  perDay + "per day";
	tenDollars.innerHTML = "For 10 USD it costs" +  tenUsd + "Rs";
	fiveOODollars.innerHTML = "For 500 USD it costs" +  fiveOOUsd + "Rs" ;
}


