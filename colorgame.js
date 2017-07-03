var colors = [];
var numSquares = 6;
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
//colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

//mode buttons event listeners
init();

function init() {
    setUpModeButtons();
    setUpSquares();
    reset();
}

function setUpModeButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }
}

function setUpSquares() {
    for (var i = 0; i < squares.length; i++) {
        //add initial colors
        //add click listeners to squares 
        squares[i].addEventListener("click", function () {
            //grab color of clicked square
            var clickedColor = this.style.background;
            //compare color to the picked color  
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!!!";
                resetButton.textContent = "Play Again!";
                changeColors(clickedColor);
                h1.style.background = clickedColor;
            } else {
                this.style.background = "#232323";
                messageDisplay.textContent = "Try again!";
                h1.style.background = "#232323";
            }
        });
    }
    reset();
}


function reset() { //click all new colors
    colors = generateRandomColors(numSquares);
    //pick a  new random  color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked Color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New colors";
    messageDisplay.textContent = "";
    //change colors of squares on the page
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    };
    h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function () {
    reset();
    this.textContent = "New colors";
    //change colors of squares on the page
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
    };
    h1.style.background = "steelblue";
    messageDisplay.textContent = "";
})

function changeColors(color) {
    //loop through all squares
    for (var i = 0; i < squares.length; i++) {
        //change each color to match given color
        squares[i].style.background = color;

    }
    //change all squares to match given color
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make an array
    var arr = [];
    //add num random color to arr
    //repeat num times
    for (var i = 0; i < num; i++) {
        //get random color and push into array
        arr.push(randomColor());
    }
    //return that array
    return arr;

}

function randomColor() {
    //pick a "red" from 0 to 255 
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0 to 255 
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0 to 255 
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}