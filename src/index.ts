const greetButton = document.getElementById("greetButton") as HTMLButtonElement;
const message = document.getElementById("message") as HTMLParagraphElement;

// Function to display a message
function displayMessage(): void {
    message.classList.remove("hidden");
}

// Add an event listener to the button
greetButton.addEventListener("click", displayMessage);
