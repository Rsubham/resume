// Get references to the toggle button and the body element
const darkModeToggle = document.querySelector('.dark-mode-toggle');
const body = document.body;

// Check if dark mode is stored in localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
}

// Add event listener to the dark mode toggle button
darkModeToggle.addEventListener('click', () => {
    // Toggle dark mode on the body element
    body.classList.toggle('dark-mode');
    
    // Update the localStorage with the current mode
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
    
    // Update the icon based on the current mode
    updateToggleIcons();
});

// Function to update the toggle button icons
function updateToggleIcons() {
    const sunIcon = darkModeToggle.querySelector('.icon.sun');
    const moonIcon = darkModeToggle.querySelector('.icon.moon');
    
    if (body.classList.contains('dark-mode')) {
        sunIcon.style.opacity = '0';
        moonIcon.style.opacity = '1';
    } else {
        sunIcon.style.opacity = '1';
        moonIcon.style.opacity = '0';
    }
}

// Initially update the toggle button icons based on current mode
updateToggleIcons();
