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

let toPast = 'oclock';
let greater30 = 1;
let faceMinutes = '';

const digitialclock = document.getElementById('digitialclock');
const clockFaceItems = document.querySelectorAll('.clockface');
const seconds = document.querySelectorAll('.glyphicon');

function clockTimer() {
	time = new Date();

	currentHour = time.getHours();
	currentMin = time.getMinutes();
	currentSec = time.getSeconds();
	currentHour >= 12 ? (ampm = 'PM') : (ampm = 'AM');

	setTime();
}

const setTime = () => {
	currentHour = currentHour % 12;
	if (currentHour == 0) currentHour = 12;
	if (currentMin < 10) currentMin = `0${currentMin}`;
	if (currentSec < 10) currentSec = `0${currentSec}`;

	const printTime = `${currentHour}:${currentMin}:${currentSec} ${ampm}`;

	digitialclock.innerText = printTime;

	updateClock();
	updateSec(currentSec);
};

const updateMinutes = () => {
	if (currentMin >= 0 && currentMin < 5) {
		faceMinutes = '';
	} else if (
		(currentMin >= 5 && currentMin < 10) ||
		(currentMin >= 55 && currentMin < 60)
	) {
		faceMinutes = 'five';
	} else if (
		(currentMin >= 10 && currentMin < 15) ||
		(currentMin >= 50 && currentMin < 55)
	) {
		faceMinutes = 'ten';
	} else if (
		(currentMin >= 15 && currentMin < 20) ||
		(currentMin >= 45 && currentMin < 50)
	) {
		faceMinutes = 'quarter';
	} else if (
		(currentMin >= 20 && currentMin < 25) ||
		(currentMin >= 40 && currentMin < 45)
	) {
		faceMinutes = 'twenty';
	} else if (
		(currentMin >= 25 && currentMin < 30) ||
		(currentMin >= 35 && currentMin < 40)
	) {
		faceMinutes = 'special25';
	} else {
		faceMinutes = 'half';
	}

	updateScreen();
};

const updateClock = () => {
	greater30 = 1;

	if (currentMin >= 0 && currentMin < 5) {
		toPast = 'oclock';
	} else if (currentMin >= 5 && currentMin <= 30) {
		toPast = 'past';
	} else {
		toPast = 'to';
		greater30 = 0;
	}
	console.log(`${currentHour}:${currentMin}:${currentSec}`);
	updateMinutes();
};

const updateSec = (currentSec) => {
	seconds.forEach((item) => {
		item.classList.remove('on');
	});
	for (i = 0; i <= currentSec; i++) {
		document
			.querySelector(`.glyphicon:nth-of-type(${i + 1})`)
			.classList.add('on');
	}
};

const updateScreen = () => {
	cleanScreen();
	document.getElementById(toPast).classList.add('on');
	document.getElementById(ampm).classList.add('on');

	let thisHourId = parseInt(currentHour) - parseInt(greater30);
	if (thisHourId === 12) thisObj = 0;
	document.getElementById(clockhour[thisHourId]).classList.add('on');

	if (faceMinutes != 'special25') {
		document.getElementById(faceMinutes).classList.add('on');
	} else {
		document.getElementById('twenty').classList.add('on');
		document.getElementById('five').classList.add('on');
	}
};

const cleanScreen = () => {
	clockFaceItems.forEach((item) => {
		item.classList.remove('on');
	});
};
