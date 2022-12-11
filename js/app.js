// Take references
const container = document.getElementById("container");
const colorNameContainer = document.getElementById("color");
const copied = document.getElementById("copied");
let bgColor = "white";
const footer = document.getElementById("footer");

// Set elements in DOM
function setOnDom() {
  container.style.backgroundColor = bgColor;
  colorNameContainer.textContent = bgColor;
  colorNameContainer.style.color = bgColor;
  navigator.clipboard.writeText(bgColor);
  copied.textContent = "";
  footer.style.backgroundColor = bgColor;
  copied.style.display = "none";
}

// Get Hex color function
function getHexColor() {
  let hexCodes = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];

  let color = "#";

  for (let i = 0; i < 6; i++) {
    let num = Math.round(Math.random() * 15);

    let num2 = hexCodes[num];

    color += num2;
  }
  bgColor = color;
  setOnDom();
}

// Get Rgb color function
function getRGBColor() {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);
  bgColor = `rgb(${red},${green},${blue})`;
  setOnDom();
}

// Copy color code
function copy() {
  copied.textContent = "The color code has been copied!";
  copied.style.display = "inline-block";
}
