var images = ["img/grape.png", "img/lemon.png", "img/cherry.png", "img/seven.png"]; // Dynamic, you can add more images by just adding it to the array
const spins = 6; // How many times to spin, excluding it going to the final one

// Don't change these
var spinssofar = 0;
var stop = false;
var spinning = false;
var points = 0;

function pointsChange() {
	pointstext.innerHTML = `${points} points`; // Sets points text HTML
}

function getRandImg() {
	return images[Math.floor(Math.random()*images.length)]; // Gets random image from the images table
}

function randomize() {
	let sm1c = getRandImg();
	let sm2c = getRandImg();
	let sm3c = getRandImg();
	
	sm1.src = getRandImg();
	sm2.src = getRandImg();
	sm3.src = getRandImg();
	spinssofar += 1;
	if (!stop) {
		setTimeout(randomize, 425); // Waits 425 miliseconds between 'spins'
	} else {
		sm1.src = sm1c;
		sm2.src = sm2c;
		sm3.src = sm3c;
		spinning = false;
		if (sm1c === sm2c && sm2c === sm3c) { // Checks if all 3 are the same
			wintext.innerHTML = "You got 3 in a row! +10 points!";
			points += 10;
		} else if (sm1c === sm2c || sm2c === sm3c || sm1c === sm3c) { // Checks if at least two are the same
			wintext.innerHTML = "You got 2 of the same kind! +5 points!";
			points += 5;
		} else {
			wintext.innerHTML = "Nice try! Spin again?";
		}
	}
	pointsChange()
}

function spin() {
	if (!spinning) { // if it isn't spinning, we want to let them be able to spin
		spinssofar = 0;
		stop = false;
		spinning = true;
		wintext.innerHTML = "";
		spinbtn.innerHTML = "Stop spinning";
		
		randomize();
	} else {
		spinbtn.innerHTML = "Spin";
		stop = true;
	}
}
