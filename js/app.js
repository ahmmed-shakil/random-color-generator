// Take references

let bgColor = "white";
function getElement(id) {
  return document.getElementById(id);
}
function getByClass(name) {
  return document.querySelectorAll(name);
}

// Play Audio
const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");

// change circle colors
colors = new Array(
  "red",
  "orange",
  "green",
  "blue",
  "brown",
  "purple",
  "gray",
  "yellow"
);

colorIndex = 0;

function changeColor(id) {
  getElement(id).style.backgroundColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
}

function startColorChange() {
  const intervalOne = setInterval(function () {
    changeColor("one");
  }, 1000);
  const intervalTwo = setInterval(function () {
    changeColor("two");
  }, 1100);
  const intervalThree = setInterval(function () {
    changeColor("three");
  }, 1200);
}

window.onload = startColorChange();

// Take references
const container = getElement("container");
const colorNameContainer = getElement("color");
const show = getElement("show");
const copied = getElement("copied");
const footer = getElement("footer");
const display = getElement("display");
display.style.display = "none";
const borderBtn = getByClass(".border");
const docs_btn = getElement("docs");

// Set elements in DOM
function setOnDom() {
  container.style.backgroundColor = bgColor;
  colorNameContainer.textContent = bgColor;
  show.style.backgroundColor = bgColor;
  copied.textContent = "";
  footer.style.backgroundColor = bgColor;
  copied.style.display = "none";
  display.style.display = "block";
  if (bgColor === "#ffffff" || bgColor === "rgb(255,255,255)") {
    footer.style.color = "black";
  }
  borderBtn.forEach(function (btn) {
    btn.style.border = `1px solid ${bgColor}`;
  });
  audio.play();
  docs_btn.addEventListener("click", function () {
    audio.play();
  });
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

  console.log("audio");
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
  audio.play();

  navigator.clipboard.writeText(bgColor);
}
