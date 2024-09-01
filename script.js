// Array of correct answers corresponding to each image
let correctAnswers = ["A", "B", "C", "D", "E", "F", "G", "H"];

// Function descriptions to be matched with the images
let functionDescriptions = [
    "Rotates to a precise angle for positioning tasks.",
    "Manages motor power and direction based on control inputs.",
    "Calculates and provides distance measurements using sound waves.",
    "Presents visual data and feedback from the microcontroller.",
    "Controls high-power circuits with a low-power signal.",
    "Transforms rotational motion into linear movement for steering or actuation.",
    "Allows wheels to rotate at different speeds while distributing power, essential in vehicle turns.",
    "Creates and edits precise 2D/3D design models for engineering and architecture."
];

// Shuffle function to randomize the order of descriptions and answers
function shuffle(array1, array2) {
    for (let i = array1.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array1[i], array1[j]] = [array1[j], array1[i]];
        [array2[i], array2[j]] = [array2[j], array2[i]];
    }
}

// Initialize the game on page load
document.addEventListener('DOMContentLoaded', () => {
    shuffle(functionDescriptions, correctAnswers);

    const imageBlocks = document.getElementById('imageBlocks');
    const imageCount = 8;

    for (let i = 1; i <= imageCount; i++) {
        imageBlocks.innerHTML += `
        <div class="grid-container">
            <div class="nomenclature">${String.fromCharCode(64 + i)}</div>
            <div class="image">
                <img src="images/a${i}.jpg" alt="Image ${i}" class="img-fluid rounded">
            </div>
            <div class="textbox">
                <input type="text" class="form-control text-center" maxlength="1">
            </div>
            <div class="function-description">${functionDescriptions[i - 1]}</div>
        </div>`;
    }
});

// Check the answers when the user submits the form
function checkAnswers() {
    const userInputs = document.querySelectorAll('input[type="text"]');
    let isCorrect = true;

    userInputs.forEach((input, index) => {
        const userAnswer = input.value.trim().toUpperCase();
        if (userAnswer !== correctAnswers[index]) {
            isCorrect = false;
        }
    });

    const resultElement = document.getElementById('result');
    const alertBox = document.getElementById('alertBox');

    if (isCorrect) {
        resultElement.textContent = 'Congratulations! All answers are correct.';
        resultElement.style.color = 'green';
        resultElement.style.fontWeight = 'bold';
        
        // Show the alert box
        alertBox.style.display = 'block';
    } else {
        resultElement.textContent = 'Some answers are incorrect. Please try again.';
        resultElement.style.color = 'red';
        resultElement.style.fontWeight = 'bold';
    }
}

// Close the alert box
function closeAlert() {
    const alertBox = document.getElementById('alertBox');
    alertBox.style.display = 'none';
}
