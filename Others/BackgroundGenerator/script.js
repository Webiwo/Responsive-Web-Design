const [color1, color2] = document.querySelectorAll(".color");
const body = document.getElementById("gradient");
const randomButton = document.querySelector("button");
const css = document.querySelector("h3");

function setGradient() {
	body.style.background =
		`linear-gradient(to right, ${color1.value}, ${color2.value})`;
	css.textContent = `${body.style.background};`;
}

function getRandom255Hex() {
	let value = Math.floor(Math.random() * 256).toString(16);
	if (value.length === 1) {
		value = `0${value}`;
	}
	return value;
}

function getRandomColorHex() {
	return `#${getRandom255Hex()}${getRandom255Hex()}${getRandom255Hex()}`;
}

randomButton.addEventListener("click", () => {
	color1.value = getRandomColorHex();
	color2.value = getRandomColorHex();
	setGradient();
});

setGradient();
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
