// Array of dark color hex codes to be used for background changes
const darkColorsArr = [
  "#2C3E50", // Midnight Blue
  "#34495E", // Wet Asphalt
  "#2C2C2C", // Dark Gray
  "#616A6B", // Storm Gray
  "#4A235A", // Eggplant
  "#2F4F4F", // Dark Slate Gray
  "#0E4B5A", // Deep Sea Blue
  "#36454F", // Charcoal
  "#2C3E50", // (Repeated) Midnight Blue
  "#800020"  // Burgundy
];

// Function to get a random valid indexes (Number).
function getRandomIndex() {
  // Generate a random number between 0 and array length - 1
  return Math.floor(darkColorsArr.length * Math.random());
}

// -----------------------------------------------------

// Select the <body> element of the webpage
const body = document.querySelector("body");
// Select the element where the current background hex color will be displayed
const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");

// -----------------------------------------------------

// Function to change the background color and update the displayed hex code
function changeBackgroundColor() {
  // Get a random color from the array
  const color = darkColorsArr[getRandomIndex()];

  // Update the text content of the span to show the selected hex code
  bgHexCodeSpanElement.innerText = color;

  // Set the background color of the page's body
  body.style.backgroundColor = color;
}

// -----------------------------------------------------

// Select the button element with the id "btn"
const btn = document.querySelector("#btn");

// Set the onclick event to call the changeBackgroundColor function when the button is clicked
btn.onclick = changeBackgroundColor;

// ✅ Alternatively, you can use addEventListener for more flexibility:
// btn.addEventListener("click", changeBackgroundColor);
