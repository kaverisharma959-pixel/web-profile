console.log("JavaScript is working!");

const button = document.getElementById("changeText");
const output = document.getElementById("output");

button.addEventListener("click", function() {
  output.textContent = "Text Changed!";
});

const validateButton = document.getElementById("validateEmail");

validateButton.addEventListener("click", function() {
  const email = document.getElementById("email").value;
  const result = document.getElementById("result");

  if (email.includes("@")) {
    result.textContent = "Valid email.";
    result.style.color = "green";
  } else {
    result.textContent = "Invalid email.";
    result.style.color = "red";
  }
});
