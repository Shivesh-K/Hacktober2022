var colors = [];
var correctColor;
var clickedColor;
var noOfBox = 6;

var newGameBtn = document.querySelector("#new-game-btn");
var colorCodeHeader = document.querySelector("#color-code-header");
var correctInd = document.querySelector("#correct-indicator");
var boxes = document.querySelectorAll(".color-box");
var easyBtn = document.querySelector("#btn-easy");
var hardBtn = document.querySelector("#btn-hard");

function setAllToHidden() {
	for (var i = 0; i < 6; i++) {
		if (!boxes[i].hasAttribute("hidden"))
			boxes[i].toggleAttribute("hidden");
	}
}

function getRandomColor() {
	var r = Math.floor(Math.random() * 255);
	var g = Math.floor(Math.random() * 255);
	var b = Math.floor(Math.random() * 255);
	var randomColor = "rgb(" + r + ", " + g + ", " + b + ")";
	return randomColor;
}

// Gets random colors in an array and return it.
function getRandomColors(x) {
	var colors = [];
	var randomColor;
	for (var i = 0; i < x; i++) {
		randomColor = getRandomColor();
		colors.push(randomColor);
		console.log(randomColor);
	}
	return colors;
}

// Initializes random colors to the "colors" array.
function setRandomColors() {
	colors = getRandomColors(noOfBox);
}

// Sets the initial color of the top header.
function setHeadColor() {
	document.querySelector("#head-container").style.background = "none";
}

// Selects the color from "colors" array to be correct color.
function selectCorrectColor() {
	correctColor = colors[Math.floor(Math.random() * (noOfBox - 0.001))];
}

// Fills the background of the boxes.
function setBoxColors(colors) {
	for (var i = 0; i < noOfBox; i++) {
		boxes[i].removeAttribute("hidden");
		boxes[i].classList.add("no-border");
		boxes[i].style.background = colors[i];
	}
}

// Sets the color header to display the RGB color code of the correctColor
function setColorCodeHeader() {
	colorCodeHeader.innerHTML = correctColor;
}

// Sets the color of the all the boxes to the given color.
function setAllBoxColor(color) {
	for (var i = 0; i < noOfBox; i++)
		boxes[i].style.background = color;
}

// Sets the event listeners for each of the boxes.
function setBoxEventListeners() {
	for (var i = 0; i < noOfBox; i++) {
		boxes[i].addEventListener("click", function () {
			clickedColor = this.style.background;
			if (clickedColor === correctColor) {
				document.querySelector("#head-container").style.background = correctColor;
				correctInd.removeAttribute("hidden");
				setAllBoxColor(correctColor);
			}
			else {
				correctInd.textContent = "Incorrect!";
				correctInd.removeAttribute("hidden");
				setTimeout(function () {
					correctInd.removeAttribute("hidden");
					correctInd.toggleAttribute("hidden");
					correctInd.textContent = "Correct!";
				}, 1000);
			}
		});
	}
}

function newGame() {
	if (!correctInd.hasAttribute("hidden")) {
		correctInd.textContent = "Correct!";
		correctInd.toggleAttribute("hidden");
	}
	setAllToHidden();
	setHeadColor();
	setRandomColors(colors);
	selectCorrectColor();
	setBoxColors(colors);
	setColorCodeHeader();
	setBoxEventListeners();
}

// Adding event listener for the easy-btn.
easyBtn.addEventListener("click", function () {
	noOfBox = 3;
	easyBtn.classList.replace("btn-outline-success", "btn-success");
	hardBtn.classList.replace("btn-primary", "btn-outline-primary");
	newGame();
});

hardBtn.addEventListener("click", function () {
	noOfBox = 6;
	easyBtn.classList.replace("btn-success", "btn-outline-success");
	hardBtn.classList.replace("btn-outline-primary", "btn-primary");
	newGame();

});

// Click event listener for the "newGameBtn".
newGameBtn.addEventListener("click", function () {
	newGame();
});


// Writing useless changes to commit

