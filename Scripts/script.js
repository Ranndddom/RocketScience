
// Function to show the sidebar
function menu() {
  event.preventDefault(); // Prevents any default action (e.g., page refresh)
  document.getElementById('sidebar').style.display = 'block';
}

// Function to hide the sidebar
function back() {
  event.preventDefault(); // Prevents any default action (e.g., page refresh)
  document.getElementById('sidebar').style.display = 'none';
}

// Get the navigation bar element
const mainNav = document.getElementById('navbar');

// Define the scroll threshold (how far down before the background changes)
const scrollThreshold = 50; // Pixels

// Function to handle the scroll event
function handleScroll() {
  if (window.scrollY > scrollThreshold) {
    mainNav.classList.add('scrolled'); // Add the 'scrolled' class
  } else {
    mainNav.classList.remove('scrolled'); // Remove the 'scrolled' class
  }
}

// Add the scroll event listener
window.addEventListener('scroll', handleScroll);

  // Get references to the dropdown button and the dropdown menu
  const dropdownButton = document.getElementById('dropdownbutton');
  const dropdownMenu = document.getElementById('dropdownitems');
  
  /**
   * Toggles the visibility of the dropdown menu.
   * Adds or removes the 'hide' class to display/hide the dropdown content.
   */
  function toggleDropdown() {
    dropdownMenu.classList.toggle('hide');
  }
  
  // Add click event listener to the dropdown button
  dropdownButton.addEventListener('click', function(event) {
    // Stop the click event from propagating to the window,
    // which would immediately close the dropdown again.
    event.stopPropagation();
    toggleDropdown();
  });
  
  /**
   * Closes the dropdown menu if a click occurs outside of it.
   * This ensures the dropdown doesn't stay open indefinitely.
   */
  window.addEventListener('click', function(event) {
    // If the click target is neither the dropdown button nor inside the dropdown menu, and the dropdown is visible, hide it.
    if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target) && !dropdownMenu.classList.contains('hide')) {
      dropdownMenu.classList.add('hide');
    }
  });