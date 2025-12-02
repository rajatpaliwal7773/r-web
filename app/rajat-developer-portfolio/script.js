// Select DOM elements
const button = document.getElementById('colorChangerButton');
const statusElement = document.getElementById('statusMessage');
const body = document.body;

// Function to handle the Dark Mode toggle
function toggleDarkMode() {
    // Toggle the 'dark-mode' class on the body element
    body.classList.toggle('dark-mode');

    // Check the current state after toggling
    const isDarkMode = body.classList.contains('dark-mode');

    // Update the status message and button text
    if (isDarkMode) {
        statusElement.textContent = 'State: Dark Mode Activated.';
        button.textContent = 'Toggle Light Mode';
    } else {
        statusElement.textContent = 'State: Light Mode Active.';
        button.textContent = 'Toggle Dark Mode';
    }
}

// Attach the event listener to the button
button.addEventListener('click', toggleDarkMode);

console.log('Script loaded: Dark Mode functionality ready.');