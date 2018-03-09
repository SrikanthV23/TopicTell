// GST Template Script

$(document).ready(function(){
	$("#openMenu").hide();
	$("#dashBoard").hide();
	$("#profeLogin").hide();
	$("#perList").hide();
	$("#qthBank").hide();
	$("#assmnt").hide();
	$("#lrnModule").hide();
	$("#collapseMenu").click(function(){
		$("#sideMenu").css("width","5%").css("transition","width 1s");
		$(".mainContent").css("width","95%").css("transition","width 1s");
		$("#collapseMenu").hide();
		$("#openMenu").show();
		$("#dashBoardMain").hide();
		$("#dashBoard").show();
		$("#profeLogin").show();
		$("#profeLoginMain").hide();
		$("#perList").show();
		$("#perListMain").hide();
		$("#qthBank").show();
		$("#qthBankMain").hide();
		$("#assmnt").show();
		$("#assList").hide();
		$("#lrnModule").show();
		$("#learningList").hide();
		$("#searchMenu").hide();
	});
	$("#openMenu").click(function(){
		$("#sideMenu").css("width","16%").css("transition","width 1s");
		$(".mainContent").css("width","84%");
		$("#openMenu").hide();
		$("#collapseMenu").show();
		$("#dashBoard").hide();
		$("#dashBoardMain").show();
		$("#profeLogin").hide();
		$("#profeLoginMain").show();
		$("#perList").hide();
		$("#perListMain").show();
		$("#qthBank").hide();
		$("#qthBankMain").show();
		$("#assmnt").hide();
		$("#assList").show();
		$("#lrnModule").hide();
		$("#learningList").show();
		$("#searchMenu").show();
	});
	$("#assList").click(function(){
		$("#asstList").toggle();
	});
	$("#learningList").click(function(){
		$("#learningModList").toggle();
	});
});