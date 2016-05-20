'use strict';

var timerDisplay = document.createElement('p');
document.body.appendChild(timerDisplay);
timerDisplay.innerHTML = '00:00:00.00';
var ButtonsVisibility = document.createElement('div');
ButtonsVisibility.classList.add('buttons_visibility');
document.body.appendChild(ButtonsVisibility);
var StartButton = document.createElement('BUTTON');
StartButton.innerHTML = 'Start';
StartButton.classList.add('start_button');
StartButton.addEventListener("click", StartTimer);
ButtonsVisibility.appendChild(StartButton);
var StopButton = document.createElement('BUTTON');
StopButton.innerHTML = 'Stop';
StopButton.classList.add('stop_button');
StopButton.addEventListener("click", StopTimer);
ButtonsVisibility.appendChild(StopButton);
var ClearButton = document.createElement('BUTTON');
ClearButton.innerHTML = 'Clear';
ClearButton.classList.add('clear_button');
ClearButton.addEventListener("click", ClearTimer);
document.body.appendChild(ClearButton);

	var msC = 0;
	var msD ='';
	var secC = 0;
	var secD ='';
	var minC = 0;
	var minD ='';
	var hovC = 0;
	var hovD ='';
	var clockTimer;

function StartTimer(){
	if(msC <= 99){msC++;}
	if(msC > 99){
		secC++;
		msC = 0;
	}
	if (secC > 59){
		minC++;
		secC = 0;
	}
	if (minC > 59){
		hC++;
		minC = 0;
	}
	if (hovC > 23){hovC = 0;}
	//DISPLAY
	if(msC < 10){
		msD = '0'+ msC;
	}else{msD = msC;}
	if (secC < 10){
		secD = '0'+ secC;
	} else {secD = secC;}
	if (minC < 10){
		minD = '0'+ minC;
	} else {minD = minC;}
	if (hovC < 10){
		hovD = '0'+ hovC;
	} else {hovD = hovC;}
	timerDisplay.innerHTML = hovD + ':' + minD + ':' + secD + '.' + msD;
	clockTimer = setTimeout(StartTimer, 10); 
	StartButton.style.zIndex = '0';
	StopButton.style.zIndex = '1';
}

function StopTimer() {
	clearTimeout(clockTimer);
	StopButton.style.zIndex = '0';
	StartButton.style.zIndex = '1';
}

function ClearTimer() {
	clearTimeout(clockTimer);
	StartButton.style.zIndex = '2';
	msC = 0;
	secC = 0;
	minC = 0;
	hovC = 0;
	timerDisplay.innerHTML = '00:00:00.00';
}