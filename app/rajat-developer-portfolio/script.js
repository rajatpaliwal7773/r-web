// Select DOM elements
const button = document.getElementById('colorChangerButton');
const statusElement = document.getElementById('statusMessage');
const body = document.body;

// Function to handle the Dark Mode toggle
function toggleDarkMode() {
    // 1. Toggle the 'dark-mode' class on the body element
    body.classList.toggle('dark-mode');

    // Check the current state after toggling
    const isDarkMode = body.classList.contains('dark-mode');

    // 2. Update the status message
    if (isDarkMode) {
        statusElement.textContent = '✅ Dark Mode Activated. The site is now optimized for low-light viewing.';
        button.textContent = 'Toggle Light Mode';
    } else {
        statusElement.textContent = '💡 Light Mode Activated. Standard color scheme restored.';
        button.textContent = 'Toggle Dark Mode';
    }

    // 3. Log state change to the console for debugging (professional practice)
    console.log(`State changed. Dark Mode is now: ${isDarkMode}`);
}

// Attach the event listener to the button
button.addEventListener('click', toggleDarkMode);

// Initial console log to confirm script load
console.log('Script loaded successfully. Awaiting user input.');