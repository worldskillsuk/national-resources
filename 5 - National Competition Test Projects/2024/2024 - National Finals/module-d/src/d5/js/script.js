//Put your code here
// Get reference to counters container
const countersContainer = document.getElementById('countersContainer');

// Create a button with specified properties
function createButton(text, className, onClickHandler) {
  const button = document.createElement('button');
  button.className = className;
  button.innerText = text;
  button.addEventListener('click', onClickHandler);
  return button;
}
/* exported createCounter */
// Create a new counter
function createCounter() {
  // Create counter container
  const counterContainer = document.createElement('div');
  counterContainer.className = 'counter-container';

  // Create counter display
  const counterDisplay = document.createElement('div');
  counterDisplay.className = 'counter-display';
  counterDisplay.innerText = '0'; // Initial counter value

  // Define increment and decrement handlers
  const updateCounter = (increment) => {
    counterDisplay.innerText = parseInt(counterDisplay.innerText) + increment;
  };

  // Create and append decrease and increase buttons
  counterContainer.appendChild(counterDisplay);
  counterContainer.appendChild(
    createButton('Decrease', 'decrease-button', () => updateCounter(-1))
  );
  counterContainer.appendChild(
    createButton('Increase', 'increase-button', () => updateCounter(1))
  );

  // Append counter container to counters container
  countersContainer.appendChild(counterContainer);
}
