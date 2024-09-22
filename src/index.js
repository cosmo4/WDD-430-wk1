"use strict";
const greetButton = document.getElementById("greetButton");
const message = document.getElementById("message");
// Function to display a message
function displayMessage() {
    message.classList.remove("hidden");
}
// Add an event listener to the button
greetButton.addEventListener("click", displayMessage);
