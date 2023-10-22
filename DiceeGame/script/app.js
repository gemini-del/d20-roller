// Get the reference to the button and the result
const rollButton = document.getElementById("rollButton");
const resultElement = document.getElementById("result");

// Function to generate a random number from 1 to 20 (simulates the roll of a D20)
function rollD20() {
    return Math.floor(Math.random() * 20) + 1;
}

// Event handler for button click.
rollButton.addEventListener("click", () => {
    // Esegui il lancio del D20
    const rollResult = rollD20();

    // Update the result on the page
    resultElement.textContent = rollResult;
});
