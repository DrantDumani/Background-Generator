let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let button = document.querySelector("button");

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";"
}

function getRandomColor() {
  	for (let h = 0; h < 2; h++ ){
	  	var letters = '0123456789ABCDEF';
	    var color = '#';
	    for (var i = 0; i < 6; i++) {
	      color += letters[Math.floor(Math.random() * 16)];
	    }
	    if (h === 0)
	    	color1.value = color;
	    else (h === 1)
	    	color2.value = color;
	    setGradient();
	}
}

setGradient();

button.addEventListener("click", getRandomColor)

color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)