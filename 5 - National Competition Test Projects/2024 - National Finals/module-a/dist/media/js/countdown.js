/* eslint-disable no-undef */
/*
-Define the target date and time for the countdown (Asia/Shanghai timezone)
*/

// const COUNTDOWN_TARGET = new Date('YOUR_TARGET_DATE_HERE');

/*
-Get the countdown elements (add your code here to define the elements)
*/

let interval = null;

//Decrements the values in the countdown.

const updateCountdown = () => {
  const now = new Date();
  const diff = COUNTDOWN_TARGET - now;

  if (diff <= 0 && interval != null) {
    // The countdown has ended
    clearInterval(interval);
  }

  const formatter = new Intl.NumberFormat('en-US');

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  getDaysElement().textContent = formatter.format(days).padStart(3, '0');
  getHoursElement().textContent = formatter.format(hours).padStart(2, '0');
  getMinutesElement().textContent = formatter.format(minutes).padStart(2, '0');
  getSecondsElement().textContent = formatter.format(seconds).padStart(2, '0');
};

//Prepares the countdown.

const initCountdown = () => {
  interval = setInterval(updateCountdown, 1000);
};

//Initialise the countdown
document.addEventListener('DOMContentLoaded', initCountdown);
