console.log("JavaScript is working!");

const button = document.getElementById("changeText");
const output = document.getElementById("output");

button.addEventListener("click", function() {
  output.textContent = "Text Changed!";
});
