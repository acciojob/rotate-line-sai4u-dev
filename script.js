//your JS code here. If required.
const line = document.getElementById("line");
let angle = 0;

// Update rotation every 20ms
setInterval(() => {
  angle += 2; // Increase angle by 2 degrees
  line.style.transform = `rotate(${angle}deg)`;
}, 20);