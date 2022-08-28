let time = new Date();

let currentHour = time.getHours();
let currentMin = time.getMinutes();
let currentSec = time.getSeconds();
let ampm = 'AM';
let clockhour = [
	'hOne',
	'hTwo',
	'hThree',
	'hFour',
	'hFive',
	'hSix',
	'hSeven',
	'hEight',
	'hNine',
	'hTen',
	'hEleven',
	'hTweleve',
];

let toPast = '';
let greater30 = 0;
let faceMinutes = 'oclock';

const timerFace = document.getElementById('digitialclock');

function clockTimer() {
	time = new Date();

	currentHour = time.getHours();
	currentMin = time.getMinutes();
	currentSec = time.getSeconds();
	currentHour >= 12 ? (ampm = 'PM') : (ampm = 'AM');

	writeNewTime();
}

const writeNewTime = () => {
	currentHour = currentHour % 12;
	if (currentHour == 0) currentHour = 12;
	if (currentMin < 10) currentMin = '0' + currentMin;
	if (currentSec < 10) currentSec = `0${currentSec}`;

	let printTime = `${currentHour}:${currentMin}:${currentSec} ${ampm}`;

	timerFace.innerText = printTime;

	updateClock();
	updateSec(currentSec);
};

function updateClock() {
	greater30 = 0;

	currentHour % 12 === 0 ? (currentHour = 12) : (currentHour = currentHour);

	console.log(`${currentHour}:${currentMin}:${currentSec}`);

	if (currentMin === 0) {
		toPast = 'oclock';
	} else if (currentMin >= 1 && currentMin <= 30) {
		toPast = 'past';
	} else {
		toPast = 'to';
		greater30 = 0;
	}

	if (currentMin === 0 && currentMin < 5) {
		faceMinutes = '';
	} else if (currentMin >= 5 && currentMin < 10) {
		faceMinutes = 'five';
	} else if (currentMin >= 10 && currentMin < 15) {
		faceMinutes = 'ten';
	} else if (currentMin >= 15 && currentMin < 20) {
		faceMinutes = 'quarter';
	} else if (currentMin >= 20 && currentMin < 25) {
		faceMinutes = 'twenty';
	} else if (currentMin >= 25 && currentMin < 30) {
		faceMinutes = 'special25';
	} else if (currentMin >= 30 && currentMin < 35) {
		faceMinutes = 'half';
	} else if (currentMin >= 35 && currentMin < 40) {
		faceMinutes = 'special25';
	} else if (currentMin >= 40 && currentMin < 45) {
		faceMinutes = 'twenty';
	} else if (currentMin >= 45 && currentMin < 50) {
		faceMinutes = 'quarter';
	} else if (currentMin >= 50 && currentMin < 55) {
		faceMinutes = 'ten';
	} else if (currentMin >= 55 && currentMin < 60) {
		faceMinutes = 'five';
	}

	updateScreen();
}

const updateSec = (currentSec) => {
	let sec = currentSec;
	$('.glyphicon').css('color', '#424447');
	//console.log(sec);
	for (i = 0; i <= sec; i++) {
		$('.glyphicon:nth-of-type(' + (i + 1) + ')').css('color', '#ffffff');
	}
};

const updateScreen = () => {
	$('.clockface').css('color', '#424447');
	$('li#' + toPast).css('color', '#ffffff');
	$('li#' + ampm).css('color', '#ffffff');
	$('li#' + clockhour[currentHour - greater30]).css('color', '#FFFFFF');
	if (faceMinutes != 'special25') {
		$('li#' + faceMinutes).css('color', '#ffffff');
	} else {
		$('li#twenty').css('color', '#ffffff');
		$('li#five').css('color', '#ffffff');
	}
};
