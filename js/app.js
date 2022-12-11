// Take references

let bgColor = "white";
function getElement(id) {
  return document.getElementById(id);
}
function getByClass(name) {
  return document.querySelectorAll(name);
}

// change circle colors
const circleColors = [
  "red",
  "green",
  "blue",
  "yellow",
  "black",
  "violet",
  "orange",
];

let i = 0;
setInterval(() => {
  i = i % circleColors;
  getElement("one").style.backgroundColor = circleColors[i];
  i++;
}, 1000);

// Take references

// const container = document.getElementById("container");
const container = getElement("container");
const colorNameContainer = getElement("color");
const show = getElement("show");
const copied = getElement("copied");
const footer = getElement("footer");
const display = getElement("display");
display.style.display = "none";
const borderBtn = getByClass(".border");

// Set elements in DOM
function setOnDom() {
  container.style.backgroundColor = bgColor;
  colorNameContainer.textContent = bgColor;
  show.style.backgroundColor = bgColor;
  // borderBtn.style.border = `1px solid ${bgColor}`;
  copied.textContent = "";
  footer.style.backgroundColor = bgColor;
  copied.style.display = "none";
  display.style.display = "block";
  console.log(borderBtn);
  borderBtn.forEach(function (btn) {
    btn.style.border = `1px solid ${bgColor}`;
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

  navigator.clipboard.writeText(bgColor);
}
