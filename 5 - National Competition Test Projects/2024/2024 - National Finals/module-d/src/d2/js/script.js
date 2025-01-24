//Animate the cloud to move from right to left
function animateCloud() {
  const cloud = document.getElementById('cloud');
  // Ensure the cloud starts from the right edge, outside the view
  let startPosition = document.getElementById('scene').offsetWidth;
  function moveCloud() {
    startPosition -= 2; // Adjust speed as necessary
    if (startPosition < -cloud.offsetWidth) {
      // Reset position after moving out of view
      startPosition = document.getElementById('scene').offsetWidth;
    }
    cloud.style.left = startPosition + 'px';
    requestAnimationFrame(moveCloud); // Continue looping
  }
  moveCloud();
}
animateCloud();

//Animate the moon to move from right to left
//Calculate arc positions

function getArcPosition(startX, startY, endX, endY, height, progress) {
  const x = startX + (endX - startX) * progress; // Linear interpolation for X
  const y =
    startY + (endY - startY) * progress - Math.sin(Math.PI * progress) * height; // Arc calculation for Y
  return { x, y };
}

function animateArc(element, startX, startY, endX, endY, height, duration) {
  const startTime = performance.now();

  // Reset opacity at the start of the animation to ensure visibility
  element.style.opacity = 1;

  function updatePosition(time) {
    const progress = Math.min((time - startTime) / duration, 1);
    const position = getArcPosition(
      startX,
      startY,
      endX,
      endY,
      height,
      progress
    );

    element.style.left = position.x + '%';
    element.style.top = position.y + 'vh';

    // Adjusted opacity for a more gradual fade-in and fade-out effect
    // Ensures that the element does not become fully transparent
    element.style.opacity = 0.8 + 0.8 * Math.cos(Math.PI * progress);

    if (progress < 1) {
      requestAnimationFrame(updatePosition);
    } else {
      // Ensure element is fully visible at the start of the animation
      element.style.opacity = 1;
    }
  }

  requestAnimationFrame(updatePosition);
}

// Adjust values based on layout
const sun = document.getElementById('sun');
const moon = document.getElementById('moon');

document.getElementById('nightButton').addEventListener('click', function () {
  animateArc(sun, 50, 10, 100, 100, 20, 2000); // Sun moves right-down
  setTimeout(() => animateArc(moon, 0, 100, 50, 10, 20, 2000), 1000); // Moon rises after sun sets
});

document.getElementById('dayButton').addEventListener('click', function () {
  animateArc(moon, 50, 10, 100, 100, 20, 2000); // Moon moves right-down
  setTimeout(() => animateArc(sun, 0, 100, 50, 10, 20, 2000), 1000); // Sun rises after moon sets
});

const body = document.querySelector('body');
const dayButton = document.getElementById('dayButton');
const nightButton = document.getElementById('nightButton');

dayButton.addEventListener('click', function () {
  body.classList.add('day-mode');
  body.classList.remove('night-mode');
});

nightButton.addEventListener('click', function () {
  body.classList.add('night-mode');
  body.classList.remove('day-mode');
});
